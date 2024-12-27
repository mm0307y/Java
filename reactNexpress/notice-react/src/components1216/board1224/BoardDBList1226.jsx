import React, { useEffect, useState } from 'react'
import Header1216 from '../include1216/Header1216'
import Footer1216 from '../include1216/Footer1216'
import './board.css'
import { useNavigate } from 'react-router'
import BoardDBItem1226 from './BoardDBItem1226'
import { boardListDB } from '../../service1216/dbLogic1218'

const BoardDBList1226 = () => {
  const navigate = useNavigate()
  const [gubun, setGubun] = useState('')
  const [keyword, setKeyword] = useState('')
  const [board, setBoard] = useState({
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

  // useEffect는 최초 BoardDBList1226.jsx가 호출될 때 한번 실행된다.
  useEffect(() => {
    const asyncDB = async () => {
      const board = { gubun: null, keyword: null }
      const res = await boardListDB(board)
      console.log(res.data)
      setBoards(res.data)
    }
    asyncDB()
  }, [])

  const boardSearch = async () => {
    const gubun = document.querySelector('#gubun').value
    const keyword = document.querySelector('#keyword').value
    const board = { gubun: gubun, keyword: keyword }
    const res = await boardListDB(board)
    console.log(res.data)
    setBoards(res.data)
    document.querySelector('#gubun').value = ''
    document.querySelector('#keyword').value = ''
  }

  // 전체 조회 구현
  const boardList = async () => {
    // boardListDB의 파라미터 자리에 board는 어디서 가져오는 걸까?
    const board = { gubun: null, keyword: null }
    const res = await boardListDB(board)
    console.log(res.data)
    setBoards(res.data)
  }

  const handleGubun = (event) => { // 분류를 변경했을 때 호출된다.
    console.log(event.target.value) // n_title, n_writer, n_content - 왜냐면 select 콤보이니까
    setGubun(event.target.value)
    boardList()
  }

  const handleKeyword = (event) => { // 키워드가 변경했을 때 호출된다.
    console.log(event.target.value) // 사용자가 입력한 문자열
    setKeyword(event.target.value)
    boardList()
  }
  return (
    <>
      <Header1216 />
      <div className='container'>
        <div className='page-header'>
          <h2>게시판 <small>글목록</small></h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <select className="form-select" id="gubun">
              <option value="">분류선택</option>
              <option value="b_title">제목</option>
              <option value="b_writer">작성자</option>
              <option value="b_content">내용</option>
            </select>
          </div>

          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="검색어를 입력하세요" id="keyword" />
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
          {/* props로 넘어온 상태값이 빈 깡통이면 실행하지 않기 */}
          <tbody>
            {
              boards && boards.map((board, index) => (
                <BoardDBItem1226 key={index} board={board} />
              ))}
          </tbody>
          {/* 데이터셋 연동하기 */}
        </table>
        <hr />
        <div className='list-footer'>
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