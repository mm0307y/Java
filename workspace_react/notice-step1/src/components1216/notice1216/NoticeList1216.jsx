import React from 'react'

const NoticeList1216 = () => {
  // 선언부
  const noticeList = () => {

  }

  const handleShow = () => {

  }
  return (
    <>
      <div>
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
          </tbody>
          {/* 데이터셋 연동하기 */}
        </table>
        <hr />
        <div className='list-footer' >
          <button className={noticeList}>전체조회</button>
          <button className={handleShow}>글쓰기</button>
        </div>
      </div>
      {/* ==================[[ 공지등록 모달 시작 ]] ========================= */}
      <div>공지등록 처리하는 부분</div>
      {/* ==================[[ 공지등록 모달 끝 ]] ========================= */}
    </>
  )
}

export default NoticeList1216