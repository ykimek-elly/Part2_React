import React, { useContext } from 'react'
import { MyContext } from '../MyContext';

export default function Test1() {
    // 전체 공유하는 저장소에서 값을 꺼내기!
    // useContext(내가만든저장소이름);
    // 자바스크립트에서 객체 타입을 변수에 바로 저장할 수있는 것 
    // 구조분해
    let { userName } = useContext(MyContext);
    // console.log(result);
  return (
    <div>
        <h3> Test1 컴포넌트가 userName 가져오기</h3>
        <p>이름: {userName}</p>
    </div>
  )
}