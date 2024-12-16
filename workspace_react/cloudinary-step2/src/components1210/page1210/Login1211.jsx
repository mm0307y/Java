import React, { useState } from 'react'
import Header1211 from '../include1211/Header1211'
import Footer1211 from '../include1211/Footer1211'
import styled from 'styled-components';
import { loginGoogle, onAuthChange } from '../../service1212/authLogic1212'
import { useNavigate } from 'react-router'
import { useEffect } from 'react';

const LoginDiv = styled.div`
    width: 30em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;    
`
const Section = styled.div`
    background-color: white;    
`
const ListUl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding: 0.5rem; 
`
const ItemLi = styled.li`
    margin-bottom: 0.5em;
`
const BtnLogin = styled.button`
    width: 80%;
    height: 2.5em;
    font-size: 1.2rem;
    border-radius: 1.2rem;
    background-color: transparent;
    cursor: pointer;
    border: 0.2rem solid lightgray;
    outline: 0;
    &:hover{
      background-color: #e8e7e6;//#FEFCF3 , #F5EBE0
    }
`

const Login1211 = ({ authLogic }) => {
  // 로그인이 성공하면 localhost:3000/marker -> Route
  // 리액트는 SPA다. (Single Page Application) 그래서 href를 쓰면 안된다. 사용하게 되면 URL이 변경된다. 사용할 거면 useNaigate()를 사용한다.
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  // 로그인 성공시 구글이 나에게 콜백함수 resolve를 통해서 user 정보를 쥐어준다. user.uid
  const goToMaker = userId => {
    navigate({
      pathname: '/marker',
      state: { id: userId },
    })
  }

  const onLogin = async () => {
    // console.log(`${authLogic.auth}, ${authLogic.googleProvider}`);
    // authLogic에 있는 로그인 함수를 호출한다.
    try {
      const user = await loginGoogle(authLogic.auth, authLogic.googleProvider);
      // 구글 인증 후 응답으로 받은 프로필 정보에서 user값을 꺼낸다.
      // localStorage.setItem("userID", user.uid)
      setUserId(user.uid)
      //window.localStorage.setItem("userId", user.uid);

      // user.uid가 존재하면(참이면 1, 안녕, 즉 내용이 있으면) - Marker불러줘
      if (user.uid) {
        goToMaker(user.uid)
      }
    }
    catch (error) {
      console.log("로그인 오류입니다.")
    }
  }

  return (
    <LoginDiv>
      <Header1211 />
      <Section>
        <h1>Login</h1>
        <ListUl>
          <ItemLi>
            <BtnLogin onClick={onLogin}>Google</BtnLogin>
          </ItemLi>
          <ItemLi>
            <BtnLogin onClick={onLogin}>Github</BtnLogin>
          </ItemLi>
        </ListUl>
      </Section>
      <Footer1211 />
    </LoginDiv >
  )
}

export default Login1211