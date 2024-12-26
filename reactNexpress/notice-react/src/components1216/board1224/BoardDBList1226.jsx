import React, { useState } from 'react'
import Header1216 from '../include1216/Header1216'
import Footer1216 from '../include1216/Footer1216'
import './board.css'
import { Navigate, useNavigate } from 'react-router'
import BoardDBItem1226 from './BoardDBItem1226'

const BoardDBList1226 = () => {
  const navigate = useNavigate()
  const [gubun, setGubun] = useState('')
  const [keyword, setKeyword] = useState('')
  const [board, setboard] = useState({
    b_no: 0,
    b_title: '',
    b_writer: '',
    b_content: ''
  })
  const [boards, setBoards] = useState([
    { b_no: 1, b_title: '제목', b_writer: '작성자' },
    { b_no: 2, b_title: '제목2', b_writer: '작성자2' },
    { b_no: 3, b_title: '제목3', b_writer: '작성자3' }
  ])
  const boardSearch = () => {

  }

  // 전체 조회 구현
  const boardList = () => {

  }


  const handleGubun = (event) => {
    console.log(event.target.value) // n_title, n_writer, n_content - 왜냐면 select 콤보이니까
    setGubun(event.target.value)
    boardList()
  }

  const handleKeyword = (event) => {
    console.log(event.target.value) // 사용자가 입력한 문자열
    setKeyword(event.target.value)
    boardList()
  }
  return (
    <>
      <Header1216 />
      <div className='container'>
        <div className='page-header' >
          <h2>게시판 <small>글목록</small></h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <select className="form-select" id="gubun" value={gubun} onChange={handleGubun} >
              <option value="">분류선택</option>
              <option value="n_title">제목</option>
              <option value="n_writer">작성자</option>
              <option value="n_content">내용</option>
            </select>
          </div>

          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="검색어를 입력하세요" value={keyword} id="keyword" onChange={handleKeyword} />
          </div>
          <div className="col-sm-3">
            <button type="button" className="btn btn-danger" onClick={boardSearch} >검색</button>
          </div>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          {/* 데이터셋 연동하기 */}
          <tbody>
            {
              boards && boards.map((board, index) => (
                <BoardDBItem1226 key={index} board={board} />
              ))}
          </tbody>
          {/* 데이터셋 연동하기 */}
        </table>
        <hr />
        <div className='list-footer' >
          <button className="btn btn-outline-primary" onClick={boardList}>전체조회</button>
          &nbsp;
          <button className="btn btn-outline-info" onClick={() => navigate("/board/write")}>글쓰기</button>
        </div>
      </div>
      <Footer1216 />
    </>
  )
}

export default BoardDBList1226