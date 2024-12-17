import React from 'react'
import { useParams } from 'react-router'
import Header1216 from '../include1216/Header1216'
import Footer1216 from '../include1216/Footer1216'

const NoticeDetail1216 = () => {
  // prpps로 가져오는게 아니다. -> http://localhost:3000/notice/2
  const { n_no } = useParams()
  console.log(n_no)
  return (
    <>
      <Header1216 />
      <div className='container'>
        <div className='page-header' >
          <h2>공지사항 <small>글목록</small></h2>
          <hr />
        </div>
        <div>NoticeDetail1216</div>
      </div>
      <Footer1216 />
    </>
  )
}

export default NoticeDetail1216