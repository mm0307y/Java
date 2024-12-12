import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import CardApp1210 from "./CardApp1210";
import { BrowserRouter } from "react-router";
import authLogic1212 from "./service1212/authLogic1212";
import { app } from "./service1212/firebase1212";
import ImageFileInput1212 from "./components1210/common1210/ImageFileInput1212";
import image_upload1212 from "./service1212/image_upload1212";

// 로그인 객체르 왜 여기서 생성하나요?
// 리액트는 상위태그에서 하위태그로만 프롭스를 넘길 수 있다.
const authLogic = new authLogic1212(app);
const FlieInput = (props) => {
  <ImageFileInput1212 {...props} imageUploader={image_upload1212} />;
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <BrowserRouter>
      <CardApp1210 FileInput={FlieInput} authLogic={authLogic} />
    </BrowserRouter>
  </>
);
