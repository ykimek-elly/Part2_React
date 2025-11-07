import React, { useContext } from 'react'
import { MyContext } from '../MyContext';

// 부서를 출력하는 컴포넌트!
export default function Dept({dept}) {
  //  MyContext에서 직접 값 꺼내오기!
  let { userName } = useContext(MyContext);
  return (
    <div>
        
        <h4>당신의 부서: {dept}</h4>
        <p>이름: {userName}</p>
    </div>
  )
}

/*
실무에서는 위에 내용처럼 사용 안한다. (소규모에서는 사용한다.)
실무에서 많이 쓰는 프로젝트 안에 모든 컴포넌트들을 관리하는 라이브러리
 - Zustand 라이브러리 많이 쓰고 있음 (설정이 진짜 간단하다.)
 - Redux Toolkit (RTK) 
 - React Query (서버 데이터 관리용!)
 - Recoil
*/