import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FS_APIKEY,
  authDomain: process.env.REACT_APP_FS_AUTHOMAIN,
  databaseURL: process.env.REACT_APP_FS_DATABASEURL,
  projectId: process.env.REACT_APP_FS_PROJECTID,
  storageBucket: process.env.REACT_APP_FS_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FS_MESSAGINGSenderID,
  appId: process.env.REACT_APP_FS_APPID,
};

// 파이어베이스 프로젝트를 활용하여 웹 서비스를 제공받기 위한 초기화 작업이다.
// 앞에 export를 붙여야 외부에서 사용이 가능하다.(ECMAScript Module)
export const app = initializeApp(firebaseConfig);
