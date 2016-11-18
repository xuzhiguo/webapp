(function(){
	$(function(){
		
		var $songList = $(".songList"); //获取歌曲列表
		var $searchList = $(".searchList"); //获取搜索列表
		var $header = $(".header"); //获取头部
		var $content = $(".content");//获取内容
		var $back = $("#back"); //获取返回按钮
		var $search = $("#search"); //获取搜索按钮
		var $keyWord = $("#keyWord"); //获取关键词
		var $prev = $(".icon-prev"); //获取上一曲
		var $next = $(".icon-next"); //获取下一曲
		var $play = $(".icon-bofang"); //获取播放按钮
		var $song_img = $(".song_img img"); //获取歌曲图片
		var $singer = $(".singer"); //获取歌手名
		var $song_name = $(".song_name"); //获取歌名
		var $play_now = $(".now"); //获取当前播放时间
		var $play_over = $(".over"); //获取结束播放时间
		var player = new Audio(); //音乐播放器对象
		var $range = $(".range input"); //滑块
		var $playType= $("#playType"); //获取播放模式
		
		//本地歌曲列表    为空则为空数组
		var localSongList = localStorage.getItem("songlist") ? JSON.parse(localStorage.getItem("songlist")) : [];
		
		//本地歌曲列表长度不等于0 ，则生成列表
		if(localSongList.length != 0){
			//调用构建本地歌曲列表的函数
			buildLocalList();
		}
		
		//构建本地歌曲列表的函数
		function buildLocalList(){
			//先清空文字
			$songList.html('');
			//取消居中
			$songList.css("display","block");
			//声明一个临时容器
			var vessel = $(document.createDocumentFragment());
			//遍历生成歌曲列表
			localSongList.forEach(function(ele){
				var $box = $("<li/>").attr({"data-timeLength":ele.timeLength,"data-url":ele.url}).html("<h4>"+ele.songName+"</h4><span>"+ele.singer+"</span>"); 
				vessel.append($box);
			});
			vessel.appendTo($songList);
		}
		
		//本地歌曲列表里的li时
		//事件委托
		$songList.on("singleTap","li",function(){
			//获取歌手名
			var singername = $(this).find("span").html();
			//获取歌曲名
			var songname = $(this).find("h4").html();
			//获取歌曲时长
			var timelength = $(this).attr("data-timeLength");
			//获取歌曲路径
			var songsrc = $(this).attr("data-url");
			//获取歌手图片地址
			ajaxJz(" http://apis.baidu.com/geekery/music/singer",{name:singername},singerInfo);
			//更换歌曲名字
			$song_name.html(songname);
			//更换歌手名字
			$singer.html(singername);
			//时长换算
			var minutes = parseInt(timelength / 60); //分
			var seconds = timelength % 60 < 10 ? '0'+parseInt(timelength % 60) : parseInt(timelength % 60); //秒
			//更换播放时长
			$play_over.html(minutes+":"+seconds);
			//设置歌曲路径
			player.src = songsrc;
			//调用播放歌曲的函数
			onPlay();
		});
		
		//获取菜单
		var $type = $(".type");
		//点击播放类型的时候
		$playType.singleTap(function(){
			//显示菜单
			$type.toggleClass("show");
		});
		
		//获取菜单里的类型
		var $type_span = $type.find("span");
		//点击选择播放类型
		$type_span.singleTap(function(){
			var $data_class = $(this).attr("data-class");
			//更换显示图标
			$playType.removeClass("icon-order icon-danquxunhuan icon-loop icon-random").addClass($data_class);
		});
		
		//点击返回按钮时头部切换回第一部分
		$back.singleTap(function(){
			$header.animate({"marginLeft":0});
			$content.animate({"marginLeft":"-100vw"});
		});
		
		//获取content的宽度
		var $page_width = $content.width()/3;
		//content左滑事件
		$content.on("swipeLeft",function(){
			//获取css样式
			var computedStyle = window.getComputedStyle($content.get(0), "");
			var marginLeft = parseInt(computedStyle.marginLeft);
			if(marginLeft != -$page_width*2){
				$header.animate({"margin-left":marginLeft-$page_width});
				$content.animate({"margin-left":marginLeft-$page_width});
			}
		});
		
		//content右滑事件
		$content.on("swipeRight",function(){
			//获取css样式
			var computedStyle = window.getComputedStyle($content.get(0), "");
			var marginLeft = parseInt(computedStyle.marginLeft);
			if(marginLeft != 0){
				$header.animate({"margin-left":marginLeft+$page_width})
				$content.animate({"margin-left":marginLeft+$page_width});
			}
		});
		
		//播放模式
//		function
		
		//点击搜索按钮时
		$search.singleTap(function(){
			//搜索框内容不为空才请求
			if($keyWord.val()){
				ajaxJz("http://apis.baidu.com/geekery/music/query",{s:$keyWord.val()},buildSongList);
			}
		});
		
		//全局变量歌手名  为后面获取歌手图片
		var $singer_name;
		//点击添加播放时 (事件委托)
		$content.on("singleTap","#add",function(){
			//进度条重置
			$range.val(0);
			//重置进度背景
			bgChange(0);
			//获取hash
			var $hash = $(this).attr("data-hash");
			//获取歌手名
			$singer_name = $(this).attr("data-name");
			//获取播放地址
			ajaxJz("http://apis.baidu.com/geekery/music/playinfo",{hash:$hash},init);
		});
		
		//全局变量 用来保存歌曲图片地址
		var $imgUrl;
		
		//创建歌曲列表的函数
		function buildSongList(res){
			//console.log(res);
			//先清空列表
			$searchList.html('');
			//临时容器
			var $ul = $(document.createDocumentFragment());
			$.each(res.data.data, function(idx,ele) {
				//裁剪字符串获取歌名
				var songName = ele.filename.split("-",2);
				if(ele.album_name){
					var $li = $("<li/>").html("<div class='info'><h4>"+songName[1]+"</h4><span>"+ele.singername+"  -《"+ele.album_name+"》</span></div><span class='iconfont icon-add' id='add' class='add' data-album="+ele.album_name+" data-hash="+ele.hash+" data-name="+ele.singername+"></span>");
				}else{
					var $li = $("<li/>").html("<div class='info'><h4>"+songName[1]+"</h4><span>"+ele.singername+"</span></div><span class='iconfont icon-add' id='add' class='add' data-hash="+ele.hash+" data-name="+ele.singername+"></span>");
				}
				$ul.append($li);
			});
			$ul.appendTo($searchList);
		}
		
		//初始化歌曲函数
		function init(res){
			//console.log(res);
			//请求成功
			//如果本地歌曲列表长度为0 , 则说明歌曲列表为空 , 则清除文本
			if(localSongList.length == 0){
				//调用保存信息的函数
				setLocal();
			}else{
				var flag = false; //用来测试是否存在与当前歌曲相同的歌曲的变量
				//如果本地歌曲列表不为空 则遍历本地歌曲列表  看是否存在当前歌曲
				localSongList.forEach(function(ele){
					//由于接口返回的数据没有什么特殊标识 只能比较地址了-_-
					if(ele.url == res.data.url){
						//存在与当前歌曲相同的歌曲
						flag = true;
					}
				});
				//不存在与当前歌曲相同的歌曲
				if(!flag){
					//调用保存信息的函数
					setLocal();
				}
			}
			
			//保存信息的函数
			function setLocal(){
				//声明一个对象用来保存信息
				var obj = {};
				obj.singer = res.data.singerName; //歌手名字
				obj.songName = res.data.songName; //歌曲名字
				obj.timeLength = res.data.timeLength; //播放时长
				obj.url = res.data.url; //歌曲播放地址
				//添加歌曲到本地歌曲列表
				localSongList.push(obj);
				//调用构建本地歌曲列表的函数
				buildLocalList();
			}
			//存到本地存储
			localStorage.setItem("songlist",JSON.stringify(localSongList));
			//获取歌手图片地址
			ajaxJz(" http://apis.baidu.com/geekery/music/singer",{name:$singer_name},singerInfo);
			//更换歌曲名字
			$song_name.html(res.data.songName);
			//更换歌手名字
			$singer.html(res.data.singerName);
			//时长换算
			var minutes = parseInt(res.data.timeLength / 60); //分
			var seconds = res.data.timeLength % 60 < 10 ? '0'+parseInt(res.data.timeLength % 60) : parseInt(res.data.timeLength % 60); //秒
			//更换播放时长
			$play_over.html(minutes+":"+seconds);
			//设置歌曲路径
			player.src = res.data.url;
			//调用播放歌曲的函数
			onPlay();
		}
		
		//获取歌手图片的函数
		function singerInfo(res){
			//console.log(res);
			$imgUrl = res.data.image;
			//更换歌曲图片
			$song_img.attr("src",$imgUrl);
		}
		
		//播放歌曲的函数
		function onPlay(){
			//播放
			player.play();
			//歌曲图片旋转
			$song_img.addClass("active");
			//改变播放按钮显示
			$play.addClass("icon-zanting");
			$song_img.removeClass("pause");
		}
		
		//歌曲暂停的函数
		function onPause(){
			//歌曲暂停
			player.pause();
			//改变播放按钮显示
			$play.removeClass("icon-zanting");
			//歌曲图片停止旋转
			//保留运动状态
			$song_img.addClass("pause");
		}
		
		//当歌曲因为缓冲下一帧而停止时触发
		player.onwaiting = function(){
			//改变播放按钮显示
			$play.removeClass("icon-zanting");
			//歌曲图片停止旋转
			//保留运动状态
			$song_img.addClass("pause");
		}
		
		//当歌曲因为缓冲下一帧而停止,恢复到播放时触发
		player.onplaying = function(){
			//歌曲图片旋转
			$song_img.addClass("active");
			//改变播放按钮显示
			$play.addClass("icon-zanting");
			$song_img.removeClass("pause");
		}
		
		//点击播放按钮时
		$play.singleTap(function(){
			//当有歌曲的时候才能点击
			if(player.duration){
				if($(this).hasClass("icon-zanting")){
					onPause();
				}else{
					onPlay();
				}
			}
		});
		
		//进度条点击
		$range.on("touchend",function(){
			//当有歌曲的时候才能点击
			if(player.duration){
				 //滑块的值
			    var $range_value = $range.val();
			    //设置当前播放时间
				player.currentTime = ( $range.val()  / 100) * player.duration;
			}
		});
		
		//切换滑块背景的函数
		function bgChange(time){
			$range.css({
				"background" : "-webkit-linear-gradient(left,#000 "+time+"%,#fff 1%,#fff)"
			});
		}
		
		//更新进度条
		player.ontimeupdate = function(){
			//换算
			var minutes = parseInt(player.currentTime / 60); //分
			var seconds = player.currentTime % 60 < 10 ? '0' +parseInt(player.currentTime % 60):parseInt(player.currentTime % 60); //秒
			//更新当前播放时间
			$play_now.html(minutes+":"+seconds);
			//播放比例
			var ratio = player.currentTime / player.duration;
			//更新进度条
			$range.val(ratio*100);
			//调用滑块背景函数
			bgChange(ratio*100);
		}
		
		//ajax加载的函数
		function ajaxJz(url,data,fn){
			$.ajax({
				type:"get",
				url:url,
				dataType:"json",
				headers:{
					apikey : '625ac55f7306eaac45a4c6e294521db9'
				},
				data:data,
				success:fn
			});
		}
	});
})();
