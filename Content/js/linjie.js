//客户信息模态框
var url = "Api//API//values/SaveUserData";
jQuery.support.cors = true;

function sleep(n) { //n表示的毫秒数
    var start = new Date().getTime();
    while (true)
        if (new Date().getTime() - start > n) break;
}

function abc() {
    let name = $("#name").val();
    let phonenum = $("#phonenumber").val();
    let email = $("#email").val();
    let organization = $("#organization").val();
    if (name != "" && phonenum != "" && email != "" && organization != "") {
        $.ajax({
            type: "post",
            url: url,
            dataType: "json",
            data: $('#form1').serialize(),
            success: function (data) {
                alert(data)
                sleep(600);
                $("#close").trigger("click");
            },
            error: function () {
                alert("出现未知,请重新提交");
            }
        });
    }
    else
    {
        alert("所提交的信息不能为空");
    }
}

$(document).ready(function () {
    //下箭头滑动
    $("#a-down").click(function () {
        var content_imgs_offset = $("#content-1").offset();
        $("body,html").animate({
            scrollTop: content_imgs_offset.top
        }, 1500)
    });

    //模态框添加星号
    $("form :input.required").each(function () {
        //创建元素
        var $required = $("<strong class='high'>*</strong>");
        //将它追加到文档中
        $(this).parent().append($required);
    });

    //为表单的必填文本框添加相关事件（blur、focus、keyup）
    $("form :input").blur(function () {
        //注意：这里的this是DOM对象，$(this)才是jQuery对象
        var $parent = $(this).parent();
        //删除之前的错误提醒信息
        $parent.find(".msg").remove();
        //验证“名称”
        if ($(this).is("#name")) {
            //运用jQuery中的$.trim()方法，去掉首位空格
            if ($.trim(this.value) == "" || $.trim(this.value).length > 4) {
                var errorMsg = " 请输入少于或等于4位的名称！";
                //class='msg onError' 中间的空格是层叠样式的格式
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        //验证手机号
        if ($(this).is("#phonenumber")) {
            if (($.trim(this.value).length != 11) || ($.trim(this.value) != "" && !/^1[34578]\d{9}$/.test($.trim(this.value))) || ($.trim(this.value) == "")) {
                var errorMsg = "请输入正确的手机号码！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        //验证邮箱
        if ($(this).is("#email")) {
            if ($.trim(this.value) == "" || ($.trim(this.value) != "" && !/.+@.+\.[a-zA-Z]{2,4}$/.test($.trim(this.value)))) {
                var errorMsg = "请输入正确的E-Mail地址！";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
        //验证组织单位
        if ($(this).is("#organization")) {
            if ($.trim(this.value) == "" || ($.trim(this.value).length > 10)) {
                var errorMsg = "请输入少于或等于10字符";
                $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
            } else {
                var okMsg = " 输入正确";
                $parent.find(".high").remove();
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
            }
        }
    }).keyup(function () {
        //triggerHandler 防止事件执行完后，浏览器自动为标签获得焦点
        $(this).triggerHandler("blur");
    }).focus(function () {
        $(this).triggerHandler("blur");
    });
});