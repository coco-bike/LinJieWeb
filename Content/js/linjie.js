
//下箭头滑动
$(document).ready(function () {
    $("#a-down").click(function () {
        var content_imgs_offset = $("#content-1").offset();
        $("body,html").animate({
            scrollTop: content_imgs_offset.top
        }, 1500)
    });

});
//标题特效
new WOW().init();