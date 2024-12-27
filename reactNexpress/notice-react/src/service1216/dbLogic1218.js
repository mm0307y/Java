import axios from "axios";

// QuillEditor에서 이미지 선택시 express 서버에 업로드 처리 요청하기
export const uploadImageDB = (file) => {
  // 사용자가 입력한 값 출력하기
  console.log(file.name);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_EXPRESS_IP + "users/board/imageUpload",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: file,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //// end of noticeInsertDB

// 게시글 목록 가져오기 구현
export const boardListDB = (params) => {
  //파라미터 값을 출력해 보기 - SELECT * FROM notice WHERE n_content like '%'||?||'%'
  console.log(params);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_EXPRESS_IP + "users/board/list",
        params: params,
      });
      resolve(response); //성공했을 때
    } catch (error) {
      reject(error); //실패했을 때
    } //end of try..catch
  });
}; //// end of boardListDB

// const [notice, setNotice] = useState({})
// 훅(HOOK) - 클래스 중심의 코드 전개에서 this에 대한 헷갈림, 구분을 잘 못한다.
export const boardInsertDB = (board) => {
  // 사용자가 입력한 값 출력하기
  console.log(board);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_EXPRESS_IP + "users/board/insert",
        headers: {
          "Content-Type": "application/json",
        },
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //// end of boardInsertDB

export const boardDetailDB = (b_no) => {
  // 파라미터 값을 출력해 보기 - SELECT * FROM react_board WHERE b_content where b_no=?'
  console.log(b_no); // 목록에서 제목을 클릭했을때 그 row의 n_no를 가져온다.
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_EXPRESS_IP + "users/board/" + b_no,
      });
      resolve(response); //성공했을 때
    } catch (error) {
      reject(error); //실패했을 때
    } //end of try..catch
  });
}; //// end of boardDetailDB

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
}; //// end of noticeDetailDB

// const [notice, setNotice] = useState({})
// 훅(HOOK) - 클래스 중심의 코드 전개에서 this에 대한 헷갈림, 구분을 잘 못한다.
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

// REST API -> get(조회), post(입력), put(수정), delete(삭제)
// useState({n_no:1, n_title:제목, n_writer:작성자, n_content:내용})
export const noticeUpdateDB = (notice) => {
  // 사용자가 입력한 값 출력하기
  console.log(notice);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "put",
        url:
          process.env.REACT_APP_EXPRESS_IP +
          "users/notice/update/" +
          notice.n_no,
        headers: {
          "Content-Type": "application/json",
        },
        data: notice, // get방식 : params
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //// end of noticeUpdatDB

// 공지글 삭제
export const noticeDeleteDB = (n_no) => {
  // 파라미터 값을 출력해 보기 - delete from notice where n_no=?
  console.log(n_no); // 목록에서 제목을 클릭했을때 그 row의 n_no를 가져온다.
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "delete",
        url: process.env.REACT_APP_EXPRESS_IP + "users/notice/delete/" + n_no,
      });
      resolve(response); // 성공했을 때
    } catch (error) {
      reject(error); // 실패했을 때
    } //// end of try..catch
  });
}; //// end of noticeDeletDB
