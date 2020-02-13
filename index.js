const express = require('express');
const app = express(),
    testJson = require('./test/test.json');


//public폴더로 설정되서 ejs에서 기본이 public폴더로 되어있음
app.use(express.static('public'));
//view 디렉토리 설정
app.set('views',__dirname + '/views');
// view 엔진은 ejs 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    // res.send("Hello NodeJS !!");
    // res.json(testJson);
    res.render('index', {name: '김성훈'});
});

app.get('/test/:email', (req, res)=>{
   testJson.email = req.params.email; //cf .req.body, req.query
    testJson.aa = req.query.aa;

   res.json(testJson);
});

//express run
const server = app.listen(7000, function(){
    console.log("Express's started on port 7000");
});
