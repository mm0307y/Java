import { Fragment, useState } from "react";
import WorkoutList1204 from "./components1204/WorkoutList1204";
import "./app1204.css";

const WorkoutApp = () => {
  const [items, setItems] = useState([
    { id: 1, name: "밴치프레스", count: 0 },
    { id: 2, name: "랫풀다운", count: 0 },
    { id: 3, name: "스쿼트", count: 0 }
  ])
  // console.log(items)
  const handleIncrement = (item) => {
    console.log(`${item.name}, count : ${item.count}`)
    // 파라미터로 넘어온 item의 이름이 있는 로우의 index값
    const index = items.indexOf(item)
    console.log(`index ${index}`)
    items[index].count += 1
    setItems([...items])
  }

  const handleDecrement = (item) => {
    const index = items.indexOf(item)
    if (items[index].count > 0) {
      items[index].count -= 1
      setItems([...items])
    }
  };

  const handleDelete = (item) => {
    const index = items.indexOf(item)
    if (index > -1) {
      items.splice(index, 1)
      setItems([...items])
    }
  };

  return (
    <Fragment>
      <ul>
        <WorkoutList1204 
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement} 
        handleDelete={handleDelete}
        items={items} 
        />
      </ul>
    </Fragment>
  );
}
export default WorkoutApp;

/* 
jsx는 html태그와 javascript는 코드를 섞어 쓸수 있다.
*/