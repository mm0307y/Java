var express = require("express");
var router = express.Router();
var db = require("../db1219");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// 리액트 프로젝트 QuillEdtior에서 이미지를 선택했 을 때 5000번 서버에 업로드 하기
// 업로드 디렉토리 설정
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// 이미지 업로드 라우트
router.post("/board/imageUpload", (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir, // 업로드 디렉토리 설정
    keepExtensions: true, // 파일 확장자 유지
    maxFileSize: 10 * 1024 * 1024, // 파일 크기 제한 (10MB)
  });

  // 폼 처리
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("폼 파싱 중 오류 발생:", err);
      return res.status(500).send("폼 파싱 실패");
    }

    // 업로드된 파일 정보 가져오기
    const file = files.file;
    //console.log(file);
    if (!file) {
      return res.status(400).send("업로드된 파일이 없습니다.");
    }

    // 파일이 배열인지, 단일 객체인지 확인 후 newFilename 읽어오기
    let newFilename;
    if (Array.isArray(file)) {
      // 배열인 경우
      console.log("파일 배열 내용:", file);
      newFilename = file[0].newFilename;
    } else {
      // 단일 객체인 경우
      console.log("파일 객체 내용:", file);
      newFilename = file.newFilename;
    }

    console.log("newFilename:", newFilename);
    res.send(`uploads/${newFilename}`); //upload된 url반환
  });
});

// http://localhost:5000/users/notice/list
router.get("/notice/list", function (req, res) {
  const { gubun, keyword } = req.query;
  let sql = "select n_no, n_title, n_writer, n_content from notice";
  // 조건 검색을 위해 사용자로 부터 받아오는 값에 따라 쿼리문을 변경 할것.
  let params = [];
  if (gubun && keyword) {
    // 사용자로 부터 둘 다 받아왔을 때 조건 쿼리문 추가
    if (gubun === "n_title") {
      // select콤보에서 제목을 클릭했을 때
      sql += " WHERE n_title LIKE ?";
    } else if (gubun === "n_writer") {
      // 작성자를 클릭했을 때
      sql += " WHERE n_writer LIKE ?";
    } else if (gubun === "n_content") {
      // 내용을 클릭했을 때
      sql += " WHERE n_content LIKE ?";
    }
    params.push(`%${keyword}%`);
  } //// end of 사용자로 부터 조건값을 받았을 때
  // 내림차순으로 정렬 추가
  sql += " ORDER BY n_no desc";
  db.get().query(sql, params, function (err, rows) {
    if (err) return res.sendStatus(400);
    console.log(rows);
    // res.render('index', { title: 'Express' });페이지를 출력할 때
    res.send(rows); // 데이터셋을 출력할 때
  });
});

// 공지사항 상세보기
router.get("/notice/detail/:n_no", function (req, res) {
  const n_no = req.params.n_no; // 사용자가 선택한 글번호
  // 한 건을 조회하기 위해서 where절을 사용한다. -pk조건절 사용한다.
  let sql =
    "select n_no, n_title, n_writer, n_content from notice where n_no=?";
  db.get().query(sql, [n_no], function (err, rows) {
    if (err) return res.sendStatus(400);
    console.log(rows);
    // res.render('index', { title: 'Express' });페이지를 출력할 때
    res.send(rows[0]); // 데이터셋을 출력할 때
  });
});

// -> POST - http://localhost:5000/users/notice/insert
// 공지글 쓰기
router.post("/notice/insert", function (req, res) {
  // 사용자가 화면에서 입력한 값 담기
  const { n_no, n_title, n_writer, n_content } = req.body;
  const sql = "insert into notice(n_title, n_writer, n_content) values(?,?,?)";
  db.get().query(sql, [n_title, n_writer, n_content], function (err, result) {
    if (err) {
      // 입력 실패했을 때
      console.error("Database error : ", err);
      return res.sendStatus(500);
    } else {
      // 입력 성공했을 때
      console.log("insert result : ", result);
      res.send({ success: true, result });
    }
  });
});

// 공지글 수정
router.put("/notice/update/:n_no", function (req, res) {
  // 사용자가 화면에서 수정한 값 담기
  const n_no = req.params.n_no;
  const { n_title, n_writer, n_content } = req.body;

  // 필수 필드 확인
  if (!n_title || !n_writer || !n_content) {
    console.error("Missing fields : ", req.body);
    return res.status(400).send("요청한 데이터가 틀렸을 때.");
  }

  const sql =
    "update notice set n_title=?, n_writer=?, n_content=? where n_no=?";
  // query요청시에 ? 순서와 변수의 순서가 일치해야 합니다.
  db.get().query(
    sql,
    [n_title, n_writer, n_content, n_no],
    function (err, result) {
      if (err) {
        // 수정 실패했을 때
        console.error("Database error : ", err);
        return res
          .sendStatus(500)
          .send("공지사항 수정 중 오류가 발생하였습니다.");
      } else {
        // 수정 성공했을 때
        res.send("수정 성공");
      }
    }
  );
});

// 공지글 삭제 - delete from notice where n_no = 21
router.delete("/notice/delete/:n_no", function (req, res) {
  // 사용자가 화면에서 수정한 값 담기
  const n_no = req.params.n_no;
  const sql = "delete from notice where n_no=?";

  db.get().query(sql, [n_no], function (err, result) {
    if (err) {
      // 삭제 실패했을 때
      console.error("Database error : ", err);
      return res
        .sendStatus(500)
        .send("공지사항 실패 중 오류가 발생하였습니다.");
    } else {
      // 삭제 성공했을 때
      res.send("삭제 성공");
    }
  });
});

module.exports = router;
