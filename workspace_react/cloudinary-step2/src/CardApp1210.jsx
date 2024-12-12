import { Route, Routes } from "react-router";
import Marker1210 from "./components1210/page1210/Marker1210";
import LoginForm1211 from "./components1210/page1210/LoginForm1211";
import "./app1212.css";

const CardApp1210 = ({authLogic, FileInput}) => {
  // 선언부
  // 함수 선언
  // return내용이 화면에 출력이 된다. - index.html문서에 root div태그 내부에 추가된다.
  // <div id="root"></div>
  return (
    <>
      <div className="appDiv">
        <Routes>
          <Route path="/" element={<LoginForm1211 authLogic={authLogic} />} />
          <Route path="/marker" element={<Marker1210 FileInput={FileInput} authLogic={authLogic} />} />
        </Routes>
      </div>
    </>
  );
}

export default CardApp1210;
