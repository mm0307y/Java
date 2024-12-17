import React, { useState } from 'react'
import NoticeItem1216 from './NoticeItem1216'
import { Button, Modal } from 'react-bootstrap';

// props로 받아오는 값을 파라미터 자리에서 바로 구조분해 할당 할수 있다.
const NoticeList1216 = () => {
  const [notices, setNotices] = React.useState([
    { n_no: 1, n_title: "공지제목1", n_writer: '관리자', n_content: '제공1 내용' },
    { n_no: 2, n_title: "공지제목2", n_writer: '총무부', n_content: '제공2 내용' },
    { n_no: 3, n_title: "공지제목3", n_writer: '영업부', n_content: '제공3 내용' }
  ])

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  // 선언부
  const noticeList = () => {

  }
  const noticeSearch = () => {
    const gubun = document.querySelector('#gubun').value
    const keyword = document.querySelector('#keyword').value
    console.log(`${gubun}, ${keyword}`)
  }

  return (
    <>
      <div className='container'>
        <div className='page-header' >
          <h2>공지사항 <small>글목록</small></h2>
          <hr />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <select className="form-select" id="gubun" name="sellist1">
              <option value="">분류선택</option>
              <option value="n_title">제목</option>
              <option value="n_writer">작성자</option>
              <option value="n_content">내용</option>
            </select>
          </div>

          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="검색어를 입력하세요." id="keyword" />
          </div>
          <div className="col-sm-3">
            <button type="button" className="btn btn-danger" onClick={noticeSearch}>검색</button>
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
            {/* notices && 반복문
                조회결과가 한 건도 없을 수도 있다. -> 이런 경우 반복문을 실행해야 할까요? - 아니요.
                notice가 참일 때만 뒤에 반복문을 진행시킨다.
                notice가 거짓일 때는 뒤에 반복문은 실행되지 않는다.
            */}
            {
              notices && notices.map((notices, index) => (
                <NoticeItem1216 key={index} notice={notices} />
              ))}
          </tbody>
          {/* 데이터셋 연동하기 */}
        </table>
        <hr />
        <div className='list-footer' >
          <button className="btn btn-outline-primary" onClick={noticeList}>전체조회</button>
          &nbsp;
          <button className="btn btn-outline-info" onClick={handleShow}>글쓰기</button>
        </div>
      </div>
      {/* ==================[[ 공지등록 모달 시작 ]] ========================= */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* ==================[[ 공지등록 모달 끝 ]] ========================= */}
    </>
  )
}

export default NoticeList1216