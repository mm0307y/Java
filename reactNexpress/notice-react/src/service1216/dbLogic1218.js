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

export const noticeDetailDB = (n_no) => {
  // 파라미터 값을 출력해 보기 - SELECT * FROM notice WHERE n_content where n_no=?'
  console.log(n_no); // 목록에서 제목을 클릭했을때 그 row의 n_no를 가져온다.
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_EXPRESS_IP + "users/notice/detail/" + n_no,
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
        data: notice,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //// end of noticeInsertDB

export const noticeUpdateDB = (notice) => {
  console.log(notice);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "put",
        url: process.env.REACT_APP_EXPRESS_IP + "users/notice/update",
        headers: {
          "Content-Type": "application/json",
        },
        data: notice,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //// end of noticeUpdatDB

export const noticeDeletDB = (notice) => {
  console.log(notice);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "delete",
        url: process.env.REACT_APP_EXPRESS_IP + "users/notice/delete",
        headers: {
          "Content-Type": "application/json",
        },
        data: notice,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //// end of noticeDeletDB
