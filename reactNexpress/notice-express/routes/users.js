var express = require("express");
var router = express.Router();
var db = require("../db1219");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//http://localhost:5000/users/notice/list
router.get("/notice/list", function (req, res) {
  var sql = "select * from notice";
  db.get().query(sql, function (err, rows) {
    if (err) return res.sendStatus(400);
    console.log(rows);
    // res.render("index", {title:'Express'}); 페이지를 출력할 때
    res.send(rows); // 데이터 셋을 출력할때
  });
});

module.exports = router;
