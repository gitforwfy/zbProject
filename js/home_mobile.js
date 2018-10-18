$(document).ready(function () {
    // $(".h1_user_info").innerHTML= "用户id：" + sessionStorage.getItem("uid") + "\n"
    //     + "手机号:" + sessionStorage.getItem("phone");
    var hasLogin=false;
    var phone=sessionStorage.getItem("phone");
    if(phone==null){
        hasLogin=false;
    }else{
        hasLogin=true;
    }

    if(hasLogin){
        document.getElementById("h1_user_info").innerHTML= "欢迎"+ sessionStorage.getItem("phone")+" 普通会员";
    }else{
        window.location.href="login_mobile.html";
    }
});