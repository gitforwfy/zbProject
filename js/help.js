$(document).ready(function () {
    Bmob.initialize("73aa7d9397e2c1c72516c486d5686a1b", "b88e357be43c2654273945a08526fdec");
    var Money=Bmob.Object.extend("Money");
    var query = new Bmob.Query(Money);
    query.find({
        success: function(results) {
            // alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                $("#money").append("<option value='"+object.get('value')+"'>"+object.get('name')+"("+object.get('value')+")"+"</option>");
            }
        },
        error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    });

});