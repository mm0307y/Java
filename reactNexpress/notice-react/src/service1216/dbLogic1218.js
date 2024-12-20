import axios from "axios";

export const noticeListDB = (params) => {
  //파라미터 값을 출력해 보기 - SELECT * FROM notice WHERE n_content like '%'||?||'%'
  console.log(params);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_EXPRESS_IP + "users/notice/list",
        params: params,
      });
      resolve(response); //성공했을 때
    } catch (error) {
      reject(error); //실패했을 때
    } //end of try..catch
  });
}; //// end of noticeListDB

export const noticeInsertDB = (notice) => {
  // 사용자가 입력한 값 출력하기
  console.log(notice);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_EXPRESS_IP + "users/notice/insert",
        headers: {
          "Content-Type": "application/json",
        },
        data: notice
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //// end of noticeInsertDB
