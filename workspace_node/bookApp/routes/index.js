var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', pageName : 'home_11_22.ejs' });
});

/* 로그인 화면 추가  */
router.get('/login', function(req, res, next) {
  res.render('index', { title: '로그인', pageName : 'auth_11_22/login_11_22.ejs' });
});

/* 도서검색 화면 추가 */
router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName : 'book_11_22/bookList_11_22.ejs' });
});


module.exports = router;
