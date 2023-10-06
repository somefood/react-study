import React from "react";

// 매개변수 안에 객체 형태로 저장되니 꺼내쓰면 됨
// 비구조화를 사용해서 props 대신 {name} 넣어서 써도 됨
function Hello({color, name}) {
  return <div style={{color}}>안녕하세요 {name}</div>
}

// 매개변수 없을 시 기본값을 사용할 수 있음
Hello.defaultProps = {
  name: "이름없음"
};

// Hello 컴포넌트 내보내서 다른 컴포넌트에서 불러와 사용할 수 있음
export default Hello;