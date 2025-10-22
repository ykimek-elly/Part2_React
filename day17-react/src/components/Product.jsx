// Product.jsx
import React from 'react'

// 부모가 자식에게 데이터를 전달하는구나!
// props로 받아오기
export default function Product(props) {

    /*
    props === {title : "아메리카노"}
    props === {title : "카페라떼",price : 3000}

    props를 쓰면 코드가 조금 길어지니깐 짧게 
    변경하기 위해서 매개변수 자리에 {}중괄호를 
    달아서 가독성도 좋아지고 짧게 변수명만 쓸 수
    있게 해준다.

        리액트 화면을 보여주기(렌더링)
     - JSX문법 안에서 {}안에 들어간 걸 값으로
       바꿔서 HTML에 출력한다.
     - true,false,null,undefined 화면에
       아무것도 렌더링 되지 않는다.
     - 리액트가 무시한다(화면에 그리지 않는다.)
    */


 return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.price}원</p>
        <p>{props.decf}</p>
        <p>{props.isHot && <p>🔥</p>}</p>
    </div>
  )
}