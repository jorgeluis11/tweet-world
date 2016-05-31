var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./dist/index.html',function (err, data){
    console.log(data);
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
