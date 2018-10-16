$(document).ready(function(){
    Bmob.initialize("73aa7d9397e2c1c72516c486d5686a1b", "b88e357be43c2654273945a08526fdec");
    $("#btn_finish").click(function(){
        var Member = Bmob.Object.extend("Member");

        var query = new Bmob.Query(Member);
        query.equalTo("phone", $(" input[ id='Rname' ] ").val());
        query.find({
            success: function(results) {
                if(results.length>0){
                    alert("该手机号已注册")
                }else{
                    var register = new Member();
                    register.set("phone", $(" input[ id='Rname' ] ").val());
                    register.set("password", $(" input[ id='Rpassword' ] ").val());
                    //添加数据，第一个入口参数是null
                    register.save(null, {
                        success: function(register) {
                            // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
                            alert('注册成功');
                            window.location.href = "login_mobile.html";
                        },
                        error: function(register, error) {
                            // 添加失败
                            alert('注册失败，返回错误信息：' + error.description);
                        }
                    });
                }
            },
            error: function(error) {
                alert("注册失败" + error.code + " " + error.message);
            }
        });

    });

});