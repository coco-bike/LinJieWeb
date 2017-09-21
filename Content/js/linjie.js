//下箭头滑动
var url = "Api//API//values/SaveUserData";
jQuery.support.cors = true;

//休眠函数
function sleep(n) { //n表示的毫秒数
    var start = new Date().getTime();
    while (true) if (new Date().getTime() - start > n) break;
}

//提交函数
function abc() {
    let name = $("#name").val();
    let phonenum = $("#phonenumber").val();
    let email = $("#email").val();
    let organization = $("#organization").val();
    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        data:$('#form1').serialize(),
        success: function (data) {
            alert(data);

            sleep(1000);

            $("#close").trigger("click");
        },
        error: function () {
            alert("发生未知错误，请重新提交")
        }
    });
}
$(document).ready(function () {
    $("#a-down").click(function () {
        var content_imgs_offset = $("#content-1").offset();
        $("body,html").animate({
            scrollTop: content_imgs_offset.top
        }, 1500)
    });

    //产品的客户弹出框
});
//标题特效
