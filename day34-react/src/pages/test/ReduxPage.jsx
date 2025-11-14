
import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../store';

export default function ReduxPage() {
    // 리덕스에게 액션 실행해줘! 요청한다.
    const dispatch = useDispatch();

  return (
    <div>
        <h2>리덕스란?</h2>

        <div>
            <p>현재 값: </p>
            <button onClick={ () => dispatch(increment())}>+1</button>
            <button onClick={ () => dispatch(decrement())}>-1</button>
            
        </div>


        <br /><br /><br /><br /><br />
        <ul>
            <li>Store (저장소) - 모든 전역 상태</li>
            <li>Action (무슨 일이 일어났는지 설명하는 메모)</li>
            <li>Reducer(상태를 실제로 변경하는 함수)</li>
        </ul>
        <p>외부 라이브러리로 리덕스를 다운 받아야된다</p>
        <p>npm install @reduxjs/toolkit react-redux</p>
        <p>저장소 만들기</p>
    </div>
  )
}