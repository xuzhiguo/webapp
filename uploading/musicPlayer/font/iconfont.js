;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-list" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M506.615 932.455c-58.476 0-115.209-11.456-168.627-34.050-51.586-21.819-97.912-53.053-137.691-92.832-39.778-39.779-71.010-86.105-92.829-137.692-22.592-53.417-34.048-110.15-34.048-168.623 0-58.475 11.456-115.209 34.048-168.625 21.819-51.587 53.052-97.913 92.83-137.692 39.779-39.778 86.105-71.010 137.691-92.829 53.418-22.593 110.152-34.048 168.627-34.048s115.209 11.455 168.626 34.048c51.586 21.818 97.912 53.051 137.692 92.83 39.778 39.778 71.010 86.105 92.829 137.691 22.592 53.417 34.048 110.152 34.048 168.625 0 58.473-11.456 115.207-34.048 168.623-21.819 51.587-53.052 97.913-92.829 137.692-39.778 39.781-86.105 71.014-137.691 92.832-53.419 22.594-110.154 34.050-168.628 34.050zM506.615 98.963c-220.723 0-400.295 179.571-400.295 400.294 0 220.725 179.572 400.298 400.295 400.298s400.295-179.573 400.295-400.298c0-220.722-179.572-400.294-400.295-400.294z"  ></path>'+
      ''+
      '<path d="M260.375 319.645h492.48v37.444h-492.48v-37.444z"  ></path>'+
      ''+
      '<path d="M260.375 483.805h492.48v37.444h-492.48v-37.444z"  ></path>'+
      ''+
      '<path d="M260.375 638.365h492.48v37.444h-492.48v-37.444z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-prev" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M490.999 563.596v-272.065l-473.417 281.783 473.417 281.783v-272.065l473.417 272.065v-563.566z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-back" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M738.145103 170.248828 663.234207 95.337931 313.114483 445.457655 312.937931 445.298759 238.768552 519.450483 238.945103 519.627034 238.768552 519.785931 313.679448 594.696828 313.838345 594.537931 658.996966 939.696552 733.166345 865.509517 388.007724 520.368552Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-word" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M457.635835 437.766298c7.735172-0.354064 16.101723-0.717338 25.093515-1.079588 8.997931-0.355087 18.986423-0.534166 29.687136-0.534166l39.20593 0c14.483876 0 27.448142 0.091074 38.525432 0.26913 10.873652 0.184195 20.815071 0.455371 29.540803 0.805342 8.801457 0.36225 16.995069 0.812505 24.356734 1.338485 7.375991 0.525979 15.118326 1.14201 23.671119 1.882883l8.978489 0.776689 0-53.18327-8.986675 0.786922c-7.883551 0.689708-15.844873 1.323135-23.662933 1.88186-7.617491 0.544399-15.810081 0.994654-24.354688 1.338485-8.728802 0.358157-18.756179 0.629333-29.810956 0.805342-10.887978 0.181125-23.75503 0.26913-39.337937 0.26913-15.216563 0-27.818579-0.088004-38.531572-0.26913-10.877745-0.176009-20.815071-0.447185-29.543873-0.805342-8.526187-0.342808-16.813944-0.793062-24.633027-1.338485-7.92346-0.552585-15.777335-1.183965-23.343661-1.877767l-9.020444-0.826831 0 52.175313 9.012258-0.816598C442.250426 438.659645 450.043926 438.122409 457.635835 437.766298z"  ></path>'+
      ''+
      '<path d="M322.402851 314.39241c5.222955 6.445806 10.1645 13.152555 14.684444 19.925818 4.603855 6.913457 9.270131 14.272052 13.862729 21.861914 4.637624 7.684006 9.662057 16.567327 14.934131 26.402323l3.928472 7.329942 45.704948-24.857131-4.437056-7.394411c-6.4192-10.69969-12.279674-20.22053-17.422811-28.310789-5.16565-8.102538-10.483772-15.752776-15.814174-22.747073-5.281283-6.910387-10.93505-13.861706-16.811898-20.669762-6.216585-7.181563-12.958126-14.925944-20.037359-23.016203l-5.066389-5.789866L298.574143 285.352003l5.489014 6.65456C311.537386 301.06794 317.366138 308.181965 322.402851 314.39241z"  ></path>'+
      ''+
      '<path d="M646.220934 675.172313l-1.537006-9.575076c-1.393743-8.691963-2.27174-16.575514-2.609431-23.441898-0.352017-6.968715-0.529049-15.198144-0.529049-24.460088L641.545448 514.950192c0-7.987928 0.084934-13.603833 0.260943-17.187451 0.160659-3.414773 0.573051-6.956436 1.225921-10.525728l1.783623-9.753131-9.914814 0c-7.18361 0-13.729699 0.092098-19.47147 0.275269-5.585205 0.185218-11.338233 0.36225-17.288758 0.540306-5.742794 0.179079-12.114922 0.26606-19.479657 0.26606l-74.086345 0c-6.553253 0-12.837376-0.089028-18.688641-0.267083-6.039553-0.174985-12.899798-0.446162-20.391423-0.805342l-10.378371-0.49835 1.848091 10.224876c0.698918 3.872191 1.313925 7.907087 1.824555 11.992125 0.496304 3.967358 0.747014 9.261944 0.747014 15.738449L459.536115 626.348328c0 5.248537-0.095167 10.213619-0.283456 14.848173-5.609765-6.426363-9.686616-14.317077-12.124132-23.464411l-3.955078-14.846126-10.209526 11.481496c-11.416004 12.837376-21.856797 23.998577-31.032784 33.174564-4.377704 4.378727-8.696056 8.53335-12.927427 12.444427L389.003711 501.971599c0-11.842723 0.795109-23.945365 2.363837-35.973306 1.505283-11.536754 3.53757-20.082384 6.040576-25.39539l6.222725-13.20986-14.528901 1.463328c-6.943133 0.698918-16.167215 1.325182-27.415396 1.860371-11.165294 0.532119-22.585391 0.801249-33.945113 0.801249-15.994276 0-28.563546-0.267083-37.358863-0.796132-8.905834-0.534166-16.386202-1.156336-22.233374-1.850138l-9.239432-1.095961 0 58.114582 10.535961-3.00852c9.612938-2.745531 20.454868-4.841262 32.220842-6.227842 10.149151-1.189082 23.025413-1.879813 38.359656-2.058892l0 186.362478c0 12.403494-1.685385 23.922852-5.008061 34.231639-3.164063 9.794064-7.891737 17.729803-14.053064 23.589254l-8.083096 7.68503 9.705036 5.497201c9.866718 5.588275 18.73162 13.121855 26.348088 22.38994l6.684236 8.133238 6.315846-8.422833c3.302209-4.40431 6.102998-8.079002 8.569166-11.247158 2.396583-3.087315 5.004991-6.217608 7.761778-9.31311 2.868327-3.228531 5.922896-6.644327 9.159614-10.235109 3.053546-3.39533 6.873548-7.214309 11.355629-11.349489l59.614749-57.482179c-0.51063 5.955642-1.197268 12.527314-2.045589 19.599384l-1.110287 9.250688 53.81465 0 0-42.720987 83.509972 0 0 34.609239L646.220934 675.172313zM509.056971 600.777953l0-81.346703 83.509972 0 0 81.346703L509.056971 600.777953z"  ></path>'+
      ''+
      '<path d="M705.169511 296.332079c-9.907651 0.36225-20.348444 0.725524-31.336706 1.079588-10.761088 0.356111-22.86066 0.536212-35.957957 0.536212L542.970362 297.947879c-14.009062 0-26.654057-0.180102-37.592177-0.537236-10.82044-0.342808-21.306258-0.795109-31.16786-1.342578-9.94449-0.552585-19.716041-1.186012-29.043477-1.882883l-8.882298-0.664126 0 52.766784 14.038738-0.735757c11.514241-0.603751 21.807678-1.143033 30.886451-1.611707 10.140964-0.524956 19.699668-0.88516 28.402887-1.072425 8.668427-0.178055 16.60826-0.356111 23.827685-0.541329 7.214309-0.178055 14.604626-0.268106 21.967314-0.268106l135.578862 0L690.986487 696.107111c0 5.158487-0.574075 9.43386-1.701758 12.687974-0.234337 0.673335-0.948605 2.720971-5.358031 4.548596-2.37407 0.982374-7.05672 2.152013-15.876596 2.153036-1.263783 0-2.573615-0.024559-3.926426-0.071631-9.886161-0.348947-23.636327-1.952468-40.869826-4.76349l-18.391882-3.001357 10.120498 15.648398c3.345188 5.17179 5.398964 9.79304 6.102998 13.721513 0.851391 4.796236 1.638313 11.113105 2.341325 18.774599l0.687662 7.512091 7.543813 0c22.586414 0 41.056068-0.934279 54.901401-2.775206 14.877849-1.990331 26.16287-5.586229 34.506908-10.999518 8.862855-5.767354 14.83487-13.675464 17.751293-23.5166 2.556219-8.668427 3.852748-19.643386 3.852748-32.620955L742.670613 409.500535c0-15.595186 0.088004-28.55229 0.26913-39.617299 0.185218-11.836583 0.36225-21.458731 0.539282-29.424146 0.171915-8.023744 0.525979-15.117302 1.051959-21.081131 0.527003-5.960759 1.13587-11.021008 1.810229-15.040555l1.721201-10.252505-10.377348 0.633427C725.917044 295.437709 714.978924 295.980062 705.169511 296.332079z"  ></path>'+
      ''+
      '<path d="M511.99693 63.875796c-247.215428 0-447.629947 200.413496-447.629947 447.629947 0 247.221568 200.413496 447.635063 447.629947 447.635063 247.221568 0 447.635063-200.413496 447.635063-447.635063C959.631994 264.289292 759.218498 63.875796 511.99693 63.875796zM785.110191 784.617981c-35.491329 35.489282-76.801177 63.348794-122.788557 82.800821-47.578622 20.12434-98.155531 30.329772-150.323681 30.329772-52.16815 0-102.739942-10.205433-150.320611-30.329772-45.987381-19.452028-87.298252-47.311539-122.792651-82.800821-35.491329-35.490306-63.349817-76.800153-82.795705-122.787534-20.125363-47.579645-30.329772-98.156554-30.329772-150.324704 0-52.16815 10.204409-102.745059 30.329772-150.320611 19.445888-45.987381 47.305399-87.296205 82.795705-122.792651 35.494399-35.489282 76.80527-63.348794 122.792651-82.800821 47.579645-20.12127 98.152461-30.324656 150.320611-30.324656 52.16815 0 102.745059 10.204409 150.323681 30.324656 45.987381 19.452028 87.298252 47.311539 122.788557 82.800821 35.494399 35.490306 63.348794 76.80527 82.800821 122.792651 20.12434 47.574528 30.328749 98.152461 30.328749 150.320611 0 52.16815-10.204409 102.745059-30.328749 150.324704C848.457962 707.812711 820.599474 749.127675 785.110191 784.617981z"  ></path>'+
      ''+
      '<path d="M712.23237 332.817038"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-add" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M510.833431 62.695924c-247.644193 0-448.406636 200.762443-448.406636 448.406636 0 247.65545 200.762443 448.416869 448.406636 448.416869 247.65545 0 448.416869-200.76142 448.416869-448.416869C959.2503 263.458367 758.488881 62.695924 510.833431 62.695924zM779.544429 562.112328 560.358381 562.112328l0 219.186048-102.008278 0L458.350103 562.112328 239.164055 562.112328l0-102.008278 219.186048 0L458.350103 240.918002l102.008278 0 0 219.186048 219.186048 0L779.544429 562.112328z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-view" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M922.643 873.494l-152.455-152.666c24.627-29.795 45.141-62.648 60.011-98.719 18.668-45.299 29.004-95.239 29.004-147.076 0-51.416-10.283-99.773-28.266-145.125l-0.738-1.951c-19.248-46.143-47.144-87.961-82.055-123.082l-1.688-1.74c-34.857-35.332-77.677-63.914-124.506-83.479v0c-45.668-18.773-95.291-29.531-147.182-29.531-105.997 0-202.237 43.612-271.898 113.010-35.543 35.332-63.862 77.73-83.69 124.823-18.563 45.826-29.057 95.449-29.057 147.129 0 51.099 10.494 100.459 28.529 145.388l0.528 1.688c19.511 47.356 48.146 89.965 83.69 125.086v0c35.542 35.542 77.73 63.862 124.77 83.162v0c45.352 19.037 95.291 29.057 147.129 29.057s101.672-9.967 147.182-29.057c36.070-14.766 69.135-35.121 98.719-59.643l152.613 152.613c13.817 13.553 35.859 13.553 49.412 0 13.922-13.711 13.922-36.123-0.053-49.886v0zM696.887 697.151v0 0l-0.844 0.474c-28.529 28.792-63.070 51.838-101.25 68.133-36.545 14.818-77.414 23.52-120.023 23.52-42.873 0-83.425-8.701-120.287-23.52v0c-38.338-16.295-72.879-39.815-101.778-68.607h0.052c-29.109-29.637-52.365-63.703-68.449-102.305l-0.474-1.213c-14.977-36.598-23.098-76.992-23.098-118.547 0-42.873 8.227-83.268 23.573-120.287 16.084-38.127 39.128-72.668 68.449-101.25 56.953-57.428 135.106-92.497 222.012-92.497 42.609 0 83.479 8.807 120.023 23.572 38.602 16.295 72.984 39.393 102.094 68.924l1.74 1.529c27.95 28.002 50.625 62.385 66.339 99.721l0.791 1.951c14.555 36.598 23.098 76.201 23.098 118.336 0 42.609-8.49 83.425-23.836 119.76-15.768 39.129-39.339 73.67-68.133 102.305v0zM377.791 245.744v0c-15.029 6.276-29.32 14.291-42.135 22.781-12.972 9.545-25.523 19.3-36.597 30.322v0.263c-11.496 11.286-22.043 23.783-30.586 36.809v0.263c-9.229 13.605-16.927 27.369-22.94 41.871-4.588 11.021 0.474 23.308 11.496 27.844 10.547 4.535 23.045-0.528 27.527-11.286 4.799-12.076 11.127-24.047 18.615-35.122v0.474c7.594-11.232 16.295-21.252 25.523-31.008 9.281-9.334 19.828-18.088 31.114-25.102 10.494-7.752 22.518-13.817 34.541-18.773 10.547-5.010 15.82-17.297 11.496-28.055-5.010-11.021-16.981-15.557-28.055-11.286v0zM702.582 453.781v0c-11.76 0-21.094 9.229-21.094 21.305 0 27.263-5.484 53.631-15.925 79.154v1.529c-10.283 23.519-25.207 45.563-45.036 65.654-19.67 19.565-42.503 34.066-66.815 44.666-25.102 10.23-52.207 16.031-78.996 16.031-11.76 0-21.305 9.018-21.305 20.83 0 11.549 9.545 21.252 21.305 21.252 32.326 0 64.864-6.487 95.502-18.984 29.057-12.023 56.637-30.112 80.42-53.684 23.519-23.467 41.080-51.099 53.631-80.209v-0.791c12.762-30.586 19.248-62.964 19.248-95.502 0.105-12.023-9.334-21.252-20.935-21.252v0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zanting" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M191.773 175.004c0-18.674 14.764-33.775 33.809-33.775h168.338c18.674 0 33.81 14.798 33.81 33.775v673.992c0 18.674-14.764 33.775-33.81 33.775h-168.338c-18.674 0-33.809-14.798-33.809-33.775v-673.992zM596.269 175.004c0-18.674 14.764-33.775 33.809-33.775h168.337c18.674 0 33.81 14.798 33.81 33.775v673.992c0 18.674-14.764 33.775-33.81 33.775h-168.337c-18.674 0-33.809-14.798-33.809-33.775v-673.992z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-order" viewBox="0 0 1146 1024">'+
      ''+
      '<path d="M989.867 317.26l-136.421 136.91c-14.131 14.178-37.039 14.178-51.17 0-14.108-14.178-14.108-37.178 0-51.356l77.056-77.336h-727.922c-19.275 0-34.92-15.621-34.92-34.897 0-19.3 15.644-34.92 34.92-34.92h727.922l-77.056-77.337c-14.108-14.178-14.108-37.156 0-51.356 14.131-14.178 37.039-14.178 51.17 0l136.421 136.934c1.582 1.582 2.328 3.585 3.563 5.354 0.978 1.233 1.769 2.561 2.584 3.911 0.698 1.373 1.537 2.607 2.048 4.028 1.793 4.144 3.073 8.543 3.073 13.387 0 5.145-1.257 9.94-3.259 14.34-1.747 4.492-4.377 8.708-8.009 12.339zM151.412 697.983h727.922l-77.056-77.337c-14.108-14.178-14.108-37.178 0-51.333 14.131-14.178 37.039-14.178 51.17 0l136.421 136.91c1.582 1.582 2.328 3.585 3.562 5.355 0.978 1.233 1.747 2.561 2.561 3.911 0.698 1.351 1.56 2.607 2.072 4.027 1.793 4.144 3.072 8.543 3.072 13.387 0 5.145-1.257 9.94-3.259 14.34-1.769 4.493-4.377 8.708-8.008 12.339l-136.421 136.91c-14.131 14.178-37.039 14.178-51.17 0-14.108-14.178-14.108-37.156 0-51.356l77.056-77.314h-727.922c-19.275 0-34.92-15.644-34.92-34.92 0-19.299 15.644-34.92 34.92-34.92z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yinliang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M769.203 696.118c-12.204 13.328-31.992 13.328-44.197 0s-12.204-34.957 0-48.284c68.562-74.88 68.562-196.694 0-271.553-12.204-13.328-12.204-34.957 0-48.284 6.111-6.664 14.106-9.996 22.099-9.996 8.013 0 16.007 3.331 22.099 9.996 92.97 101.496 92.97 266.627 0 368.122zM681.731 614.206c-10.875 13.247-28.497 13.267-39.372-0.021-10.875-13.268-10.875-34.792 0-48.060 11.835-14.431 18.358-33.649 18.358-54.070 0-20.422-6.52-39.637-18.358-54.070-10.875-13.267-10.875-34.792 0-48.060 5.438-6.644 12.572-9.956 19.686-9.956 7.134 0 14.247 3.311 19.686 9.935 22.343 27.291 34.65 63.554 34.65 102.149 0 38.594-12.307 74.859-34.65 102.149zM491.559 839.172l-143.094-143.094h-102.211c-39.802 0-61.326-22.915-61.326-61.326v-245.306c0-38.41 21.524-61.326 61.326-61.326h102.211l143.094-143.094c26.983-27.719 81.769-27.76 81.769 0v633.707c0 54.765-55.93 45.687-81.769 20.441zM512 246.35l-143.094 143.094c-8.79-0.287-14.821 0-20.441 0h-81.769c-13.268 0-20.441 8.197-20.441 20.441v204.422c0 12.225 7.176 20.441 20.441 20.441h81.769c5.621 0 16.129-0.348 20.441 0l143.094 143.094v-531.496z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-danquxunhuan" viewBox="0 0 1208 1024">'+
      ''+
      '<path d="M557.433 239.404h-155.769c-82.211 0-162.26 32.453-220.673 90.865s-90.865 136.298-90.865 220.673c0 28.125 4.327 56.25 10.818 84.375 4.327 15.143 19.471 25.962 34.615 25.962 2.164 0 6.49 0 8.655-2.164 19.471-4.327 30.289-23.798 23.798-43.269-6.49-21.635-8.655-43.269-8.655-64.903 0-134.134 108.173-242.307 242.307-242.307h142.789c2.164-23.798 6.49-47.596 12.981-69.232z"  ></path>'+
      ''+
      '<path d="M871.135 630.989c-38.943 80.048-121.154 136.298-216.345 136.298h-326.683v-62.74c0-19.471-12.981-28.125-30.289-17.307l-149.279 93.030c-17.307 10.817-17.307 28.125 0 38.943l151.443 97.356c17.307 10.818 30.289 4.327 30.289-17.307v-62.74h326.683c82.211 0 162.26-32.451 220.673-90.865 36.779-36.779 64.905-82.211 77.885-131.971-28.125 8.655-56.25 15.143-84.375 17.307z"  ></path>'+
      ''+
      '<path d="M847.335 90.125c-131.971 0-237.982 106.011-237.982 237.982s106.009 237.982 237.982 237.982 237.982-106.009 237.982-237.982-106.011-237.982-237.982-237.982zM890.606 455.75h-45.433v-179.568c-17.307 15.143-36.779 25.962-62.74 34.615v-47.596c12.981-2.164 25.962-8.655 38.943-17.307s25.962-17.307 34.615-28.125h34.615v237.982z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-random" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M706.588 371.824h54.684v88.773l153.286-156.144-153.286-152.771v101.338h-54.684c-156.518 0-244.897 116.177-322.846 218.653-70 92.126-130.564 179.013-228.214 179.013h-88.752v118.805h88.753c156.519 0 244.855-123.484 322.847-225.957 69.995-92.146 130.352-171.709 228.212-171.709v0zM296.151 439.754c6.623-8.631 13.411-17.446 20.24-26.451 16.641-21.775 34.028-44.853 52.988-67.745-56.050-52.364-123.565-91.029-213.85-91.029h-88.752v118.786c0 0 25.17-1.119 88.753 0 61.511 1.327 100.093 26.474 140.622 66.441v0zM761.271 651.638h-54.684c-59.611 0-105.396-29.663-147.991-73.767-4.178 5.65-8.526 11.28-12.874 16.89-18.71 24.59-38.786 51.062-60.932 77.14 57.539 56.112 127.168 98.522 221.798 98.522h54.684v101.898l153.286-152.751-153.286-156.145v88.215zM761.271 651.638z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-loop" viewBox="0 0 1167 1024">'+
      ''+
      '<path d="M149.305 636.148c20.273-5.625 32.133-26.625 26.508-46.875-6.306-22.734-9.515-46.336-9.515-70.195 0-144.234 117.351-261.585 261.585-261.585h354.445v67.477c0 21.657 15.070 30.047 33.469 18.633l162.399-100.595c18.398-11.413 18.585-30.352 0.399-42.094l-163.195-105.398c-18.187-11.742-33.070-3.633-33.070 18v67.805h-354.469c-90.211 0-175.031 35.133-238.828 98.93-63.773 63.797-98.907 148.617-98.907 238.828 0 30.75 4.148 61.219 12.305 90.586 4.688 16.852 19.993 27.891 36.681 27.891 3.353 0 6.797-0.444 10.195-1.406z"  ></path>'+
      ''+
      '<path d="M1026.688 399.266c-4.688-16.852-19.993-27.891-36.681-27.891-3.375 0-6.797 0.444-10.219 1.406-20.273 5.625-32.133 26.625-26.508 46.875 6.306 22.734 9.515 46.336 9.515 70.195 0 144.234-117.353 261.585-261.585 261.585h-354.422v-67.477c0-21.657-15.070-30.047-33.469-18.633l-162.399 100.595c-18.398 11.413-18.585 30.352-0.399 42.094l163.172 105.398c18.188 11.742 33.070 3.633 33.070-18v-67.805h354.445c90.211 0 175.031-35.133 238.828-98.93s98.93-148.617 98.93-238.828c0-30.727-4.125-61.219-12.281-90.586z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-next" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M533.665 583.032v272.065l473.417-281.783-473.417-281.783v272.065l-473.417-272.065v563.566z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)