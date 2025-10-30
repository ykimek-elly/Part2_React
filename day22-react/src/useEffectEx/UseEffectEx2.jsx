//파일명: UseEffectEx2.jsx

import React, { useEffect } from 'react'

export default function UseEffectEx2() {


  // 딱 한번만 데이터 통신해서 가져오기
  useEffect(()=>{
    //1. 주소 작성 (요청)
    fetch('https://jsonplaceholder.typicode.com/posts')
    //2. 응답
    .then(res => res.json())  // 데이터가 다 올 때까지 다음을 실행하지 않는다.
    .then(data => console.log(data));


  },[]);

  return (
    <div>
        <h3>jsonplaceholder에서 posts 자료 가져오기</h3>
    </div>
  )
}
/*
.then((res)=>{
        // 내가 읽기 쉽게 자바스크립트로 변경 
        // json() response 객체 안에서 body부분을 자동으로 꺼내서
        // 내가 읽기 쉬운 자바스크립트 객체로 바꿔준다.
        let posts = res.json();      
        console.log(posts);

        // {<pending>} 위에 코드 처럼 작성하면 아직 데이터 준비중이라고
        // 된다. 
    })

*/