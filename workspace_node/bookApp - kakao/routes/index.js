var express = require('express');
var router = express.Router();

/* GET home page. */
/* localhost:5000 엔터로 요청을 하면 6번이 인터셉트해서 homme_11_22.ejs를 요청한다. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', pageName : 'home_11_22.ejs' });
});

/* 로그인 화면 추가  */
/* localhost:5000/login 요청하면 views폴더 아래 auth폴더 아래 login_11_22.ejs 요청된다. */
/* localhost:5000 엔터를 하면 localhost.ejs */
router.get('/login', function(req, res, next) { // "/"은 루트로 localhost:5000 엔터를 하면 그 쪽으로 이동이 된다. 그때 "/"를 붙이면 그쪽으로 이동된다.
  // "/"뒤에는 내가 이동하려고 하는 값을 작성해준다.
  res.render('index', { title: '로그인', pageName : 'auth_11_22/login_11_22.ejs' });
});

/* 도서검색 화면 추가 */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName : 'book_11_22/bookList_11_22.ejs' });
});

/* 클라우드 서비스를 활요한 게시판 구현 */
router.get('/posts', function(req, res, next) {
  res.render('index', { title: '글목록', pageName : 'posts_11_27/list_11_27.ejs' });
});

router.get('/posts/write', function(req, res, next) {
  res.render('index', { title: '글쓰기', pageName : 'posts_11_27/write_11_27.ejs' });
});

router.get('/posts/:id', function(req, res, next) {
  // 사용자가 선택한 값을 쿼리스트링으로 받아오는 코드 추가한다.
  let id = req.params.id
  res.render('index', { title: '상세보기', pageName : 'posts_11_27/read_11_27.ejs' });
});

router.get('/posts/update/:id', function(req, res, next) {
  // 사용자가 선택한 값을 쿼리스트링으로 받아오는 코드 추가한다.
  let id = req.params.id
  res.render('index', { title: '글수정', pageName : 'posts_11_27/update_11_27.ejs' });
});

module.exports = router;
