import React from 'react'

const WorkoutItem1203 = (props) => {
  // console.log(props)
  const item = props.item
  const handleIncrement = () => {
    console.log("WorkoutItem handleIncrement")
    props.handleIncrement(item)
  }
  return (
    <>
      <li className="workout"></li>
      <span className='workout-name'>운동이름</span>
      <span className="worout-count">0</span>
      <button className="workout-button workout-incrase">
        <i className='fas fa-plus-square'></i>
      </button>
    </>
  )
}

export default WorkoutItem1203