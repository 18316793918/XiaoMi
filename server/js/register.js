function register(body,connection,res) {
    let userid = body.userid;
    let registername = body.register_name;
    let registerpassword = body.register_password;
    let sql = 'select userid from user where username="' + registername + '"';
    connection.query(sql,function(err,result) {
        if(result.length > 0) {
            return res.json({
                status:3,
                msg:"用户名已经存在"
            })
        } else {
            let sqlinsert = 'insert into user(userid,username,userpwd) value(' + userid + ',"' + registername + '","' + registerpassword + '")'; 
            connection.query(sqlinsert,function(err,result) {
                res.json({
                    status:2,
                    msg:"成功插入"
                })
            })
               
        }
    })
}
module.exports = {
    register
}