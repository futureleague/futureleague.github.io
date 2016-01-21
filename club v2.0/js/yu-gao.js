(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
if($(window).width() >= 1200) {
$('.img-35').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-486.png' : 'images/zhan-tie-tu-xiang-324.png') : 'images/zhan-tie-tu-xiang-162.png');} else if($(window).width() >= 960) {
$('.img-35').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-390.png' : 'images/zhan-tie-tu-xiang-260.png') : 'images/zhan-tie-tu-xiang-130-2.png');} else if($(window).width() >= 768) {
$('.img-35').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-312.png' : 'images/zhan-tie-tu-xiang-208.png') : 'images/zhan-tie-tu-xiang-104.png');} else if($(window).width() >= 480) {
$('.img-35').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-195.png' : 'images/zhan-tie-tu-xiang-130.png') : 'images/zhan-tie-tu-xiang-65.png');
} else {
$('.img-35').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-129.png' : 'images/zhan-tie-tu-xiang-86.png') : 'images/zhan-tie-tu-xiang-43.png');
}
};
$(window).resize(r);
r();
initMenu($('#menu-1')[0]);
initMenu($('#menu-2')[0]);

});