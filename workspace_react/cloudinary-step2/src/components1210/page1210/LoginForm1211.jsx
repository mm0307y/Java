import React, { useState } from 'react'
import Header1211 from '../include1211/Header1211'
import Footer1211 from '../include1211/Footer1211'
import './login1211.css'
import { useNavigate } from 'react-router'
import { loginGoogle } from '../../service1212/authLogic1212'

const LoginForm1211 = ({ authLogic }) => {
  // 로그인이 성공하면 localhost:3000/marker -> Route
  // 리액트는 SPA다. (Single Page Application) 그래서 href를 쓰면 안된다. 사용하게 되면 URL이 변경된다. 사용할 거면 useNaigate()를 사용한다.
  const navigate = useNavigate()

  const [userId, setUserId] = useState()
  // 로그인 성공시 구글이 나에게 콜백함수 resolve를 통해서 user 정보를 쥐어준다. user.uid

  const goToMaker = userId => {
    navigate({
      pathname: "/marker",
      state: { id: userId },
    })
  }

  const onLogin = async () => {
    // authLogic에 있는 로그인 함수를 호출한다.
    try {
      const user = await loginGoogle(authLogic.auth, authLogic.googleProvider)
      // 구글 인증 후 응답으로 받은 프로필 정보에서 user값을 꺼낸다.
      localStorage.setItem("userID", user.uid)
      setUserId(user.uid)

      // user.uid가 존재하면(참이면 1, 안녕, 즉 내용이 있으면) - Marker불러줘
      if (user.uid){
        goToMaker(user.uid)
      }
    }
    catch (error) {
      console.log("로그인 오류입니다.")
    }
  }

  return (
    <div className='login'>
      <Header1211 />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button className='btnLogin' onClick={onLogin}>Google</button>
          </li>
          <li>
            <button className='btnLogin'>Github</button>
          </li>
        </ul>
      </section>
      <Footer1211 />
    </div>
  )
}

export default LoginForm1211