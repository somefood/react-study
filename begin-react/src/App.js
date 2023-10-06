import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import './App.css';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

// 닫힌 태그는 꼭 존재해야함 또는 Auto Closing
// 두 개 이상의 태그는 무조건 하나의 태그로 감싸져야 하기에 <></> (Fragment)로 감싸기!
// JSX 내부에 자바스크립트 변수는 {} 안에 감싸서 보여주기
function App() {
  return (
    <UserList/>
  );
}

export default App;
