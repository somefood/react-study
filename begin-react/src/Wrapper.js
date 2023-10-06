import React from "react";

// 매개변수 안에 객체 형태로 저장되니 꺼내쓰면 됨
// 비구조화를 사용해서 props 대신 {name} 넣어서 써도 됨
function Wrapper({children}) {
  const style = {
    border: "2px solid black",
    padding: "16px"
  };

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;