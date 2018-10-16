$(document).ready(function () {
    document.getElementById("userinfo").innerHTML = "用户id：" + sessionStorage.getItem("uid") + "\n"
        + "手机号:" + sessionStorage.getItem("phone");


    $(".heading_li>a").hover(function () {
        var ulNode=$(this).next("ul");
        ulNode.slideToggle();
    })
});