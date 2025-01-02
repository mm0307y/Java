import React from 'react'

const Header0102 = () => {
  // 아래 부분이 화면 처리부분
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">한빛미디어</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/book">도서검색</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/posts">게시판</a>
              </li>
              <li className="nav-item" id="cart" style={{ display: 'none' }}>
                <a className="nav-link active" aria-current="page" href="/users/cart">장바구니</a>
              </li>
              <li className="nav-item" id="mypage" style={{ display: 'none' }}>
                <a href="/users/mypage" aria-current="page" className="nav-link active">MyPage</a>
              </li>
            </ul>
            {/* ================================  ============================================ */}

            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" id="login">
                  <a href="/login" aria-current="page" className="nav-link active">로그인</a>
                </li>
                <li className="nav-item" id="email" style={{ display: 'none' }}>
                  <a href=" " aria-current="page" className="nav-link active">현사용자 이메일 정보 출력자리</a>
                </li>
                <li className="nav-item" id="logout" style={{ display: 'none' }}>
                  <a href=" " aria-current="page" className="nav-link active">로그아웃</a>
                </li>
              </ul>
            </div>
            {/* ================================  ============================================ */}
          </div>
        </div>
      </nav>
      <div id="slider-div">
        <div>
          <img src="/images/header01.png" alt="배너ChatGPT" width="100%" />
        </div>
        <div>
          <img src="/images/header02.png" alt="배너ChatGPT" width="100%" />
        </div>
        <div>
          <img src="/images/header03.png" alt="배너ChatGPT" width="100%" />
        </div>
        <div>
          <img src="/images/header04.png" alt="배너ChatGPT" width="100%" />
        </div>
      </div>
    </>
  )
}

export default Header0102
/* 
  페이지 이동시 href를 사용하면 URL이 변한다.
  - 기존에 요청은 끊어지고 새로운 요청이 일어난다. - 기존 페이지가 쥐고 있던 데이터는 잃어버린다.
*/

