import React from 'react'
import styled from 'styled-components'
import CardAddForm1212 from './CardAddForm1212'
import CardEditorForm1212 from './CardEditorForm1212'

const EditorDiv = styled.div`
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

const CardEditor1210 = ({ FileInput, cards }) => {
  return (
    <EditorDiv>
      <TitleH1>Card Editor</TitleH1>
      {Object.keys(cards).map(key => (
        <CardEditorForm1212 key={key} card={cards[key]} FileInput={FileInput} />
      ))}
      <TextDiv>나나나나나ㅏ나나나나나나나나나나나</TextDiv>
      <CardAddForm1212 FileInput={FileInput} />
    </EditorDiv>
  )
}
export default CardEditor1210