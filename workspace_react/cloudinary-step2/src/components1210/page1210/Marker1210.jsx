import React, { useState } from 'react'
import CardEditor1210 from './CardEditor1210'
import Preview1210 from './Preview1210'
import styled from 'styled-components'
import Header1211 from '../include1211/Header1211'
import Footer1211 from '../include1211/Footer1211'
import { useNavigate } from 'react-router'
import { logout } from '../../service1212/authLogic1212'

const MarkerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  border-radius: 30px;
`

const ContainerDiv = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`

const Marker1210 = ({ authLogic, FileInput }) => {
  const navigate = useNavigate()
  // 일반 변수와 다른 점은 상태값이 변하면 화면이 재 렌더링이 된다.
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      fileName: '집에 가고 싶어요!!!!!!!!!',
      fileURL: 'https://res.cloudinary.com/dabcqtmbm/image/upload/v1707156245/lmbxljzqmcylnyngwafk.jpg',
    },
    '2': {
      id: '2',
      fileName: 'Fuck!!! I want to go home like crazy!!!!!!',
      fileURL: null,
    },
    '3': {
      id: '3',
      fileName: 'Fuck!!! I want to go home like crazy!!!!!!',
      fileURL: '/images/tiger2.jpg',
    },
    '4': {
      id: '4',
      fileName: 'Fuck!!! I want to go home like crazy!!!!!!',
      fileURL: '/images/tiger.jpg',
    },
    '5': {
      id: '5',
      fileName: 'Fuck!!! I want to go home like crazy!!!!!!',
      fileURL: '/images/dog.avif',
    },
  })

  const onLogout = async () => {
    await logout(authLogic.auth)
    navigate('/')
  }

  return (
    <MarkerDiv>
      <Header1211 onLogout={onLogout} />
      <ContainerDiv>
        <CardEditor1210 FileInput={FileInput} cards={cards} />
        <Preview1210 cards={cards} />
      </ContainerDiv>
      <Footer1211 />
    </MarkerDiv>
  )
}

export default Marker1210