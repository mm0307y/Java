import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage1216 from "./components1216/pages1216/HomePage1216";
import LoginPage1216 from "./components1216/auth1216/LoginPage1216";
import NoticeDetail1216 from "./components1216/notice1216/NoticeDetail1216";
import NoticeList1216 from "./components1216/notice1216/NoticeList1216";
import NoticeTestList1218 from "./components1216/noticeTest1218/NoticeTestList1218";
import NoticeTestDetail1218 from "./components1216/noticeTest1218/NoticeTestDetail1218";
import NoticeDBList1219 from "./components1216/noticeDB1219/NoticeDBList1219";
import NoticeDBDetail1220 from "./components1216/noticeDB1219/NoticeDBDetail1220";
import QuillWrite1224 from "./components1216/board1224/QuillWrite1224";
import BoardDBUpdate1226 from "./components1216/board1224/BoardDBUpdate1226";
import BoardDBDetail1226 from "./components1216/board1224/BoardDBDetail1226";
import BoardDBList1226 from "./components1216/board1224/BoardDBList1226";
import BoardDBWrite1226 from "./components1216/board1224/BoardDBWrite1226";
import PaginationTest1230 from "./components1216/board1224/PaginationTest1230";

const App = () => {
  // Route의 path와 Header의 Link to는 일치해야 한다.
  // 사용자 정의 컴포넌트는 함수이다.
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<HomePage1216 />} />
        <Route path="/login" exact={true} element={<LoginPage1216 />} />
        <Route path="/board" exact={true} element={<BoardDBList1226 />} />
        <Route path="/board/write" exact={true} element={<BoardDBWrite1226 />} />
        <Route path="/board/:b_no" exact={true} element={<BoardDBDetail1226 />} />
        <Route path="/board/update/:b_no" exact={true} element={<BoardDBUpdate1226 />} />
        <Route path="/quill/write" exact={true} element={<QuillWrite1224 />} />
        <Route path="/noticeDB" exact={true} element={<NoticeDBList1219 />} />
        <Route path="/noticeDB/:n_no" exact={true} element={<NoticeDBDetail1220 />} />
        <Route path="/notice" exact={true} element={<NoticeList1216 />} />
        <Route path="/notice/:n_no" exact={true} element={<NoticeDetail1216 />} />
        <Route path="/noticeT" exact={true} element={<NoticeTestList1218 />} />
        <Route path="/noticeTD" exact={true} element={<NoticeTestDetail1218 />} />
        <Route path="/page" exact={true} element={<PaginationTest1230 />} />
      </Routes>
    </>
  );
}

export default App;

/* 
- http://localhost:3000 뒤에 index.html 가 생략 되어 있다. http://localhost:3000/index.html 
- <div id ="root"></div>
- root에 대한 정보는 index.js에서 참조한다. - document.querySelector("#root")
- index.js에서 App을 import한다.
- 이 때 App.jsx의 erturn에 있는 태그가 화면에 출력된다.
- 그런데 이번에는 App.jsx에 메뉴를 클릭했을 때 보여줄 페이지에 대한 링크를 걸어 준다.
*/