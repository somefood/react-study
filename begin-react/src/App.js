import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import './App.css';

// 닫힌 태그는 꼭 존재해야함 또는 Auto Closing
// 두 개 이상의 태그는 무조건 하나의 태그로 감싸져야 하기에 <></> (Fragment)로 감싸기!
// JSX 내부에 자바스크립트 변수는 {} 안에 감싸서 보여주기
function App() {
  const name = "react";
  // 스타일 설정 시 인라인 태그는 객체 형태로 넘겨줌
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem"
  };
  return (
    <>
      <Wrapper>
        <Hello name="react" color="red" />
        <Hello color="pink" />
      </Wrapper>
    </>
  );
}

export default App;
