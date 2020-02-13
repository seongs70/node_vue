const mysql = require('mysql');

const connection = mysql.createConnection({
   host     :   'localhost',
   user     :   'root',
   password :   'ghfjdk',
   database :   'node_vue'
});

connection.connect();

//async하기 위해 connection 안에 넣고 넣고
connection.query('update * User set lastlogin=now() where uid=?', ['user1'],function (err,res,field){
    if(err) throw err;
    console.log('업데이트 : ', results[0]);
    connection.query('select * from User where uid=?', ['user1'],function (err,res,field){
        if(err) throw err;
        console.log('첫번째 유저: ', results[0]);
        connection.end();
    });
});


