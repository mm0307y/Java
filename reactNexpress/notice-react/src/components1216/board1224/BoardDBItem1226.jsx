import React from 'react'
import { Link } from 'react-router'

const BoardDBItem1226 = (props) => {
  // ES6 - 구조분해 할당
  const { b_no, b_title, b_writer } = props.board
  return (
    <>
      <tr>
        <td>{b_no}</td>
        <td>
          <Link to={"/board/" + b_no} className="btn btn-primary" >{b_title}</Link>
        </td>
        <td>{b_writer}</td>
      </tr >
    </>
  )
}

export default BoardDBItem1226