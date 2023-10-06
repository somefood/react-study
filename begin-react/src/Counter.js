import React, {useState} from "react";

function Counter() {

  const [number, setNumber] = useState(0); // useState(기본값 초기화), 배열이 반환되며 첫번째는 현재 상태, 두번째는 Setter 함수
  const onIncrease = () => {
    setNumber(prevState => prevState + 1);
  }

  const onDecrease = () => {
    setNumber(prevState => prevState - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;