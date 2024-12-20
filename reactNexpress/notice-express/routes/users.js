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

// -> POST - http://localhost:5000/users/notice/insert
// 공지글 쓰기
router.post("/notice/insert", function (req, res) {
  // 사용자가 화면에 입력한 값 담기
  const { n_no, n_title, n_writer, n_content } = req.body;
  const sql =
    "insert into notice(n_title, n_writer, n_content) values(?, ?, ?)";
  db.get().query(sql, [n_title, n_writer, n_content], function (err, result) {
    if (err) {
      // 입력을 실패했을때
      console.error("Database error : ", err);
      return res.sendStatus(500);
    } else {
      // 입력을 성공했을때
      console.log("insert result :", result);
      res.send({ success: true, result })
    }
  });
});

module.exports = router;
