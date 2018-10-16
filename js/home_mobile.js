$(document).ready(function () {
    // $(".h1_user_info").innerHTML= "用户id：" + sessionStorage.getItem("uid") + "\n"
    //     + "手机号:" + sessionStorage.getItem("phone");

    document.getElementById("h1_user_info").innerHTML= "欢迎"+ sessionStorage.getItem("phone")+"会员";
    // $(".h1_user_info").innerHTML= "欢迎" + "手机号:" + sessionStorage.getItem("phone")+"会员";
});