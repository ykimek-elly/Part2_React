import React, { useEffect } from 'react'

export default function LocalStorage() {
    // useEffect()
    // -리액트는 새로고침없이 화면이 유지되면서 변경된 부분만 업데이트!
    // -리액트 컴포넌트가 실행될때 자동으로 실행되는 함수!


    // 1. 스토리지 저장시 꼭 useEffect안에서 작성

    useEffect(()=>{
        // storage들은 useEffect()안에서 작성을 해야 에러없이 실행된다.

        //2. 값 저장  local
        // localStorage.setItem("nickname","누니")


        // let name = localStorage.getItem("nickname")

        // alert("읽기완료 :"+name)
    },[])

  return (
    <div>
        <h3>3가지 기능</h3>
        <p>저장 - setItem(key,value)</p>
        <p>불러오기 - getItem(key,value)</p>
        <p>삭제 - clear() / removeItem(key)</p>
    </div>

  )
}
