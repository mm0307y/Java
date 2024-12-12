import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import MyButton1212 from '../common1210/MyButton1212'

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap; /* 한 줄에 하나씩 떨어질 수 있도록 랩을 주고 */
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: 1em;    
`

const FileInputDiv = styled.div`
  font-size: 0.8rem;
  width: 100%;
  border: 0;
  padding: 0.5em;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background: #F5EBE0;    
`

const CardAddForm1212 = ({FileInput}) => {
  //값들을 읽어와서 Card에 추가하기
  const formRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onFileChange = (file) => {
    console.log(file);
  }
  const onSubmit = (event) => {

  };
  return (
    <Form ref={formRef}>
      <FileInputDiv>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </FileInputDiv>
      <MyButton1212 name="Add" onClick={onSubmit} />
    </Form>
  )
}

export default CardAddForm1212