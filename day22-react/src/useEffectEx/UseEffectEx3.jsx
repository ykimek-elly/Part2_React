//파일명: UseEffectEx3.jsx
import React, { useEffect } from 'react'

export default function UseEffectEx3() {


    // 기다려야되는 작업을 실행할 때는 비동기로 시작을 해야되서
    // async 함수 앞에 달아야된다.
    // 
    async function getRecipes(){
        // 1. 주소(request  요청)
        // await 데이터가 다 다운받을 때까지 기다려!
        const res = await fetch("https://dummyjson.com/recipes");
        const recipes = await res.json();
        console.log(recipes);
    }


    //실시간으로 데이터 받아오기!
    // 딱 한번만
    useEffect(()=>{
        getRecipes(); //함수 실행!
    },[]);


  return (
    <div>
        <h3>최신 버전 잠깐 기다렸다가 데이터 출력!</h3>
    </div>
  )
}
/*
💡 주요 실행 단계 (컴포넌트 마운트 시)단계동작설명
1. 컴포넌트 렌더링 시작UseEffectEx3 함수가 호출되어 실행됩니다.
2. JSX 반환 & DOM 업데이트<h3>최신 버전 잠깐 기다렸다가 데이터 출력!</h3>이 화면에 그려집니다. (UI 표시)
3. useEffect 호출DOM 업데이트 완료 후 (렌더링 직후), 의존성 배열([])이 비어 있으므로 useEffect 내부 함수가 실행됩니다.
4. getRecipes() 실행useEffect 내부에서 비동기 함수 getRecipes가 호출됩니다.
5. 서버 통신 시작 (Fetch)await fetch("...")가 실행되며, 브라우저의 비동기 작업 큐에 요청이 들어갑니다. (통신 비동기 대기)
6. 통신 대기 & React 유휴이 시점에 React는 멈추지 않고, 다른 작업을 수행하거나 사용자 상호작용에 응답할 수 있습니다.
7. 데이터 수신 완료서버에서 응답(JSON 데이터)을 받습니다.
8. 데이터 파싱 및 출력const recipes = await res.json();과 console.log(recipes);가 순차적으로 실행되며 데이터가 콘솔에 출력됩니다.

*/