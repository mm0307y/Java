import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import styles from './ImageFileInput.module1212.css';
const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; /* 아이템을 가운데 오게함 */
  align-items: center; /* 아이템을 중간 middle에 오게함 */  
`
const HiddenInput = styled.input`
  display: none;
`

const ImageFileInput1212 = ({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }
  const onChange = async event => {
    setLoading(true);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <ContainerDiv>
      <HiddenInput
        ref={inputRef}
        type="file" accept="image/*" name="file"
        onChange={onChange}
      />
      {!loading && (
        <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </ContainerDiv>
  )
}

export default ImageFileInput1212