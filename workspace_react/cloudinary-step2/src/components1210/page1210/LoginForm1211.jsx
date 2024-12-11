import React from 'react'
import Header1211 from '../include1211/Header1211'
import Footer1211 from '../include1211/Footer1211'
import './login1211.css'

const LoginForm1211 = () => {
  return (
    <div className='login'>
      <Header1211 />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button className='btnLogin'>Google</button>
          </li>
          <li>
            <button className='btnLogin'>Github</button>
          </li>
        </ul>
      </section>
      <Footer1211 />
    </div>
  )
}

export default LoginForm1211