import { Route, Routes } from "react-router";
import Marker1210 from "./components1210/page1210/Marker1210";
import LoginForm1211 from "./components1210/page1210/LoginForm1211";

const CardApp1210 = () => {
  // 선언부
  // 함수 선언
  // return내용이 화면에 출력이 된다. - index.html문서에 root div태그 내부에 추가된다.
  // <div id="root"></div>
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm1211 />} />
        <Route path="/maker" element={<Marker1210 />} />
      </Routes>
    </>
  );
}

export default CardApp1210;
