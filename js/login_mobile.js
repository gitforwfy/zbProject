$(document).ready(function(){
    Bmob.initialize("73aa7d9397e2c1c72516c486d5686a1b", "b88e357be43c2654273945a08526fdec");
    // 登录
    $("#btn_login").click(function(){
        var Member = Bmob.Object.extend("Member");
        var query = new Bmob.Query(Member);
        query.equalTo("phone", $(" input[ id='user' ] ").val());
        query.equalTo("password", $(" input[ id='password' ] ").val());
        query.find({
            success: function(results) {
                if(results.length>0){
                    var obj=results[0];
                    console.log(obj);
                    sessionStorage.setItem("uid",obj.id);
                    sessionStorage.setItem("phone",obj.attributes.phone);
                    window.location.href = "home_mobile.html";
                }else{
                    alert("登陆失败")
                }
            },
            error: function(error) {
                alert("登陆失败" + error.code + " " + error.message);
            }
        });
    });
});
