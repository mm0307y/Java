import React from 'react'
import styled from 'styled-components'

const CardEditorDiv = styled.div`
  flex-basis: 50%;
  border-right: 1px solid #9E7676;
  color: white;
  display: flex; /* 추가 */
  flex-direction: column; /* 수직 배열 */
  align-items: center; /* 가로 중앙 정렬 */
`

const TitleH1 = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
  color: #594545;
`

const TextDiv = styled.div`
  font-size: 3em; /* 글씨 크기 */
  margin: 0.5em 0; /* 여백 추가 */
  text-align: center; /* 가로 중앙 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
`

function CardEditor1210() {
  return (
    <CardEditorDiv>
      <TitleH1>Card Editor</TitleH1>
      <TextDiv>나나나나나ㅏ나나나나나나나나나나나</TextDiv>
    </CardEditorDiv>
  )
}

export default CardEditor1210