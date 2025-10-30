// TodoList.jsx

import { useState } from "react";

//컴포넌트?
//  - 내가 직접 만든 HTML 태그를 컴포넌트라 한다.
//  - 중복되는 HTML태그를 하나로 묶어서 새로운 태그 만들기!

export default function TodoList() {

    // 1. 할일을 저장하는 배열 만든다.
    // let todoList = [];
    // 리액트에서 사용하는 변수로 만들기
    let [todoList, setTodoList] = useState([]);

    // 2. input태그를 이용해서 todoList에 할일 추가하기

  return (
    <div>
        {/* 3. HTML 구조 잡기 */}
        <label>
            <input type="text"
                   placeholder="오늘의 할일을 입력하세요"
                   
                   onKeyDown={(eventKey) =>{
                    //console.log("키보드:",eventKey.key);
                    //console.log("키보드 결과:",
                    //        eventKey.key == "Enter"
                    //);
                    if(eventKey.key == "Enter"){
                        console.log("입력값:",
                            eventKey.target.value
                        );
                        // todoList.push(eventKey.target.value);
                        setTodoList([...todoList,eventKey.target.value]);
                        console.log(todoList);
                    }                    
                   }}
                                     
                   
                   onChange={(event)=>{

                    //  키보드를 눌렀을 때 구별하는 방법
                    // console.log(event.key);

                     //todoList.push(event.target.value);
                     //console.log(todoList);
                   }}/>            
        </label>

        <ul>
            {/* input으로 입력된 할일을 리스트로 태그만들어서
            사용하기 */}
            {
                todoList.map((todo)=>(
                    <li>{todo}</li>
                ))
            }
        </ul>
    </div>
  )
}