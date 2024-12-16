import React from 'react'

// const NoticeItem1216 = ({n_no, n_title, n_writer}) => {
const NoticeItem1216 = (props) => {
  // 공지 제목을 클릭했을 때 상세보기로 이동하기 - 라우트 처리
  // http://localhost:3000/detail/글번호(n_no)
  const { n_no, n_title, n_writer } = props.notice
  return (
    <>
      <tr>
        <td>{n_no}</td>
        <td>{n_title}</td>
        <td>{n_writer}</td>
      </tr>
    </>
  )
}

export default NoticeItem1216