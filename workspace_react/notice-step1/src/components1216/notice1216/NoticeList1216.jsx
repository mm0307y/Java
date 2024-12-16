import React, { useState } from 'react'
import NoticeItem1216 from './NoticeItem1216'
import { Button, Modal } from 'react-bootstrap';

// props로 받아오는 값을 파라미터 자리에서 바로 구조분해 할당 할수 있다.
const NoticeList1216 = ({ notices, notices2, notices3 }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  // const NoticeList = ({props}) => {
  // 아니면 아래 처럼 따로 구조분해 할당 코드를 작성해야 한다.
  //   const {notices, notices2, notices3} = props
  console.log(notices) // 라벨이 없는 json 형식
  console.log(notices2) // 라벨이 있는 json 형식
  console.log(notices3) // 깡통

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
              <option defaulValue>분류선택</option>
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
            {
              notices2 && Object.keys(notices2).map((key) => (
                <NoticeItem1216 key={key} notice={notices2[key]} />
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