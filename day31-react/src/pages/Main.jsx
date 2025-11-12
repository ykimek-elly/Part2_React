// 파일명: Main.jsx

import React from 'react'
import { useCounterStore } from '../store/useCounterStore'

export default function Main() {

  // 공유하는 값 꺼내기 위해서는 useCounterStore 공간을
  // 포함하기 
  const { count } = useCounterStore();

  return (
    <div>
      <h3>공유하는 값 꺼내기!(zustand)</h3>
      <p>count : {count}</p>
    </div>
  )
}