// NameChange.jsx

import React, { useState } from 'react'

export default function NameChage() {

    //이름을 저장하는 변수 == useState()
    let [name,setName] = useState("이서희");

    function chageName(){
        setName("React 개발자 🧑‍💻");
    }
  return (
    <div>
        <h3>이름: {name}</h3>
        <button onClick={chageName}>이름변경</button>

    </div>
  )
}