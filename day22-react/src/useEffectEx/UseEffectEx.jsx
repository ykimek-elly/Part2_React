// 폴더명: UseEffectEx
// 파일명: UseEffectEx.jsx

import React, { useEffect, useState } from 'react'

export default function UseEffectEx() {

    let [count,setCount] = useState(0);

    // 처음 한 번만 실행되는 부분
    useEffect(()=>{
        console.log("🚗컴포넌트가 처음 렌더링될때 딱 한번!");

        // 내가 원하는 서버(데이터를 제공하는 컴퓨터)
        //   https://jsonplaceholder.typicode.com/users
        //   users 가져와줄래?  나 줄래?
        // 클라이언트(데이터를 요청하는 컴퓨터)
        // 정보를 주고 받기 위해서 통신을 해야된다.
        // 서버와 데이터를 주고 받을 때 가장 기본적인 도구인
        // fetch 자바스크립트에서도 사용가능하다 기본적으로 
        // 자바스크립트 안에서 제공되는 기능이다.

        // 1. fetch(url) 정보를 가져올 주소 (request 요청!)
        fetch('https://jsonplaceholder.typicode.com/users')
        // 2. 서버는 나한테 응답(response)!해줘야된다.
        //    응답이 오면 읽어서 사람이 볼 수있게 바꾸는 과정이다!
        .then(resp => resp.json())   // 응답받은 데이터를 자바스크립트 객체로 바꾼다.
        .then(data => console.log(data)) //바꾸면 data라는 변수에 넣어서 확인이 가능하다.

    },[]);

     function clickBtn(){
        setCount(count +1);
     }

     console.log("🌀 컴포넌트 렌더링됨!");
  return (
    <div>
        <h3>useEffect?</h3>
        <p>react 컴포넌트를 화면에 그릴 때 딱 한번만 실행된다</p>
        <p>처음 시작될 때만 해야 하는 일</p>

        <button onClick={clickBtn}>증가</button>

    </div>

  )
}