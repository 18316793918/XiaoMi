var ExecuteSQL = require("./executeSQL")
function deleteCart(body, connection, res) {
    let sql = `delete from usercart where itemname = "${body.itemname}" and memory = "${body.memory}" and color = "${body.color}" and userid = "${body.userid}";`
    ExecuteSQL.execute(sql, connection, res);
}
function deleteOrder(body,connection,res) {
    let sql = `delete from userorder where orderid = "${body.orderid}"`;
    ExecuteSQL.execute(sql, connection, res);
}
module.exports = {
    deleteCart,
    deleteOrder
}