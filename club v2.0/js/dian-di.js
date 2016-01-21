(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery||window.Zepto);
 $.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

$(document).ready(function() {
r = function() {
if($(window).width() >= 1200) {
$('.img-29').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/800-4-900.jpeg' : 'images/800-4-600.jpeg') : 'images/800-4-300.jpeg');
$('.img-30').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/img_1540-900.jpg' : 'images/img_1540-600.jpg') : 'images/img_1540-300.jpg');
$('.img-31').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/y586vlkb2p8lu-n0r-bbb-6-900.jpg' : 'images/y586vlkb2p8lu-n0r-bbb-6-600.jpg') : 'images/y586vlkb2p8lu-n0r-bbb-6-300.jpg');
$('.img-32').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/kv-xl43_8rehot-sq8kf-5e-900.jpg' : 'images/kv-xl43_8rehot-sq8kf-5e-600.jpg') : 'images/kv-xl43_8rehot-sq8kf-5e-300.jpg');
$('.img-33').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/d-900.jpg' : 'images/d-600.jpg') : 'images/d-300.jpg');
$('.img-34').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-486.png' : 'images/zhan-tie-tu-xiang-324.png') : 'images/zhan-tie-tu-xiang-162.png');} else if($(window).width() >= 960) {
$('.img-29').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/800-4-720.jpeg' : 'images/800-4-480.jpeg') : 'images/800-4-240-3.jpeg');
$('.img-30').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/img_1540-720.jpg' : 'images/img_1540-480.jpg') : 'images/img_1540-240-3.jpg');
$('.img-31').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/y586vlkb2p8lu-n0r-bbb-6-720.jpg' : 'images/y586vlkb2p8lu-n0r-bbb-6-480.jpg') : 'images/y586vlkb2p8lu-n0r-bbb-6-240-3.jpg');
$('.img-32').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/kv-xl43_8rehot-sq8kf-5e-720.jpg' : 'images/kv-xl43_8rehot-sq8kf-5e-480.jpg') : 'images/kv-xl43_8rehot-sq8kf-5e-240-3.jpg');
$('.img-33').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/d-720.jpg' : 'images/d-480.jpg') : 'images/d-240-3.jpg');
$('.img-34').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-390.png' : 'images/zhan-tie-tu-xiang-260.png') : 'images/zhan-tie-tu-xiang-130-2.png');} else if($(window).width() >= 768) {
$('.img-29').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/800-4-576.jpeg' : 'images/800-4-384.jpeg') : 'images/800-4-192.jpeg');
$('.img-30').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/img_1540-576.jpg' : 'images/img_1540-384.jpg') : 'images/img_1540-192.jpg');
$('.img-31').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/y586vlkb2p8lu-n0r-bbb-6-576.jpg' : 'images/y586vlkb2p8lu-n0r-bbb-6-384.jpg') : 'images/y586vlkb2p8lu-n0r-bbb-6-192.jpg');
$('.img-32').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/kv-xl43_8rehot-sq8kf-5e-576.jpg' : 'images/kv-xl43_8rehot-sq8kf-5e-384.jpg') : 'images/kv-xl43_8rehot-sq8kf-5e-192.jpg');
$('.img-33').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/d-576.jpg' : 'images/d-384.jpg') : 'images/d-192.jpg');
$('.img-34').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-312.png' : 'images/zhan-tie-tu-xiang-208.png') : 'images/zhan-tie-tu-xiang-104.png');} else if($(window).width() >= 480) {
$('.img-29').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/800-4-360.jpeg' : 'images/800-4-240-2.jpeg') : 'images/800-4-120.jpeg');
$('.img-30').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/img_1540-360.jpg' : 'images/img_1540-240-2.jpg') : 'images/img_1540-120.jpg');
$('.img-31').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/y586vlkb2p8lu-n0r-bbb-6-360.jpg' : 'images/y586vlkb2p8lu-n0r-bbb-6-240-2.jpg') : 'images/y586vlkb2p8lu-n0r-bbb-6-120.jpg');
$('.img-32').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/kv-xl43_8rehot-sq8kf-5e-360.jpg' : 'images/kv-xl43_8rehot-sq8kf-5e-240-2.jpg') : 'images/kv-xl43_8rehot-sq8kf-5e-120.jpg');
$('.img-33').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/d-360.jpg' : 'images/d-240-2.jpg') : 'images/d-120.jpg');
$('.img-34').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-195.png' : 'images/zhan-tie-tu-xiang-130.png') : 'images/zhan-tie-tu-xiang-65.png');
} else {
$('.img-29').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/800-4-240.jpeg' : 'images/800-4-160.jpeg') : 'images/800-4-80.jpeg');
$('.img-30').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/img_1540-240.jpg' : 'images/img_1540-160.jpg') : 'images/img_1540-80.jpg');
$('.img-31').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/y586vlkb2p8lu-n0r-bbb-6-240.jpg' : 'images/y586vlkb2p8lu-n0r-bbb-6-160.jpg') : 'images/y586vlkb2p8lu-n0r-bbb-6-80.jpg');
$('.img-32').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/kv-xl43_8rehot-sq8kf-5e-240.jpg' : 'images/kv-xl43_8rehot-sq8kf-5e-160.jpg') : 'images/kv-xl43_8rehot-sq8kf-5e-80.jpg');
$('.img-33').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/d-240.jpg' : 'images/d-160.jpg') : 'images/d-80.jpg');
$('.img-34').attr('src', (window.devicePixelRatio > 1) ? ((window.devicePixelRatio > 2) ? 'images/zhan-tie-tu-xiang-129.png' : 'images/zhan-tie-tu-xiang-86.png') : 'images/zhan-tie-tu-xiang-43.png');
}
};
$(window).resize(r);
r();
initMenu($('#menu-1')[0]);
initMenu($('#menu-2')[0]);

});