import React from 'react'
import styled from 'styled-components';
import Card1210 from './Card1210';
import MyButton1212 from '../common1210/MyButton1212';

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

const CardEditorForm1212 = ({ FileInput }) => {
  const { fileName, fileURL } = Card1210;

  const onFileChange = (file) => {
    console.log(file);
  }

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
  };
  const onSubmit = () => {

  };
  return (
    <Form>
      <FileInputDiv>
        <FileInput name={fileName} onChange={onChange} onFileChange={onFileChange} />
      </FileInputDiv>
      <MyButton1212 name="Delete" onClick={onSubmit} />
    </Form>
  )
}

export default CardEditorForm1212