// UseStateEx1.jsx

import React, { useState } from 'react'

export default function UseStateEx1() {

    //값을 저장해야될 때는 변수 
    // 버튼을 누를때 마다 값을 기억하는 공간
    // 변수를 사용하면 값은 변경이 되지만 리액트가 웹 화면을
    // 바꾸지 못한다. 
    //  메모리에 저장된 숫자는 React 모른다.
    // let count = 0;

    // useState()
    // React는 state(상태)가 바뀌면 화면을 다시 그리는 함수가
    //  필요하다.

    // let 키워드  변수 생성
    // [변수명,set함수명 ] = useState(초기값);

    let [count,setCount] = useState(0);

  return (
    <div>
        <h3>값을 변경하는 것! - useState()</h3>
        <p>값을 기억하고 화면을 다시 그리는 역할</p>
        <p>useState() <br/>
            값을 저장하고 바뀌면 화면을 자동으로 다시 그려주는 것!</p>
    
        <h4>현재 숫자:{count}</h4>

        <button onClick={
            ()=>{
                // 리액트한테 값이 바뀌었어 그러니 화면을
                // 다시 그려줄래? 부탁!
                setCount(count +1);
                console.log(count);
            }
        }>버튼 +1</button>
    
    
    </div>
  )
}