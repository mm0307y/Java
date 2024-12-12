import React from 'react'
import './header1211.css'
const Header1211 = ({onLogout}) => {
  return (
    <div className='header'>
      {onLogout && <button onClick={onLogout} className='logout'>로그아웃</button>}
      <img src="/images/logo.png" alt="logo" />
      <div>
        <h1>Name Card</h1>
      </div>
    </div>
  )
}

export default Header1211