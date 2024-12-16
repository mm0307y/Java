import {
  getAuth,
  GithubAuthProvider, //깃헙으로 로그인할때
  GoogleAuthProvider, // 구글에서 제공하는 제공자 정보
  signInWithPopup, // 구글 로그인 이중 화면 띄움
} from "firebase/auth";

class AuthLogic {
  // 클래스 선언
  // 생성자 함수 - 전역 변수 초기화
  constructor() {
    // 바닐라 스크립트에서 같은 이름의 함수를 지원하지 않는다.
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }
  // 사용자 정의 함수 구현
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
}
export default AuthLogic; // 외부 js에서 사용할 때 반드시 추가할 것

// 로그인 풀렸을 때 처리 또는 로그인 세션시간이 만료되었을때
export const onAuthChange = (auth) => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    }); //end of onAuthStateChanged - 로그인 상태가 풀렸는지 체크하여 콜백함수에 파라미터로 사용자 정보를 쥐어줌
  }); //end of Promise
}; //end of onAuthChange

export const loginGoogle = (auth, googleProvider) => {
  console.log("loginGoogle호출 성공");
  console.log(googleProvider);

  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider) // 인증이 되는 동안 지연이 발생할 수 있다.
      .then((result) => {
        // 내가 구글 회원이라면 프로필 정보를 쥐고 있다.
        console.log(result); // object Object 출력 - 값이 안 보인다. - uid, displayName-realname, email
        console.log(JSON.stringify(result)); // [object, Object]

        const user = result.user; // 여기서 사용되는 user레이블은 구글에서 인증 후에 콜백으로 반환하는 값들 (Object)
        console.log(user.uid);
        resolve(user); // {uid:xxxxxxxxx, displayName: xxxxx, email: xxxxx}
      })
      .catch((error) => reject(error));
    // 로그아웃 처리하기
  });
}; //// end of logoinGoogle

// 로그아웃 버튼 클릭시 호출하기
export const logout = (auth) => {
  return new Promise((resolve, reject) => {
    // 로그아웃 처리하기
    auth.signOut().catch((e) => reject(e + "로그아웃 오류 입니다."));
    // localStorage.removeItem("userId");
    resolve();
  });
}; //// end of logout
