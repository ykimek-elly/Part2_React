import React from 'react'
import { useParams } from 'react-router-dom'

export default function Test() {

    //  url에서 변하는 변수값을 꺼내기 
    // useParams(); url에서 변수값 꺼내줘!
    //  { id } 꺼낼때 변수명을 중괄호 안에 써주면 자동으로 꺼내온다.
    
    let { id } = useParams();

    // 숫자 키(key) 사용해도 되지만 비추천
    // HTML 웹에서는 문서 자체가 문자로 이루어진 파일
    // 대부분 통신을 하거나 url주소를 작성할 때 문자로 인식을 한다.
    let cardInfo = {
        "1" : {id : 1 , title : "hello"},
        "2" : {id : 2 , title : "world"},
        "3" : {id : 3 , title : "Seohee"}
    }
    console.log("url에서 꺼낸 변수: ",id);

    // 내가 꺼내온 동적 파라미터들은 동적으로 접근을 할 때는 
    // 대괄호를 써야되는 규칙!
    console.log(cardInfo[id]);

  return (
    <div>
        <h3>{ id } 페이지 입니다.</h3>
        <p>제목: {cardInfo[id].title}</p>
        <br /><br /><br /><br /><br />
    </div>
  )
}