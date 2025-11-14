import React from 'react'
import { useLocation } from 'react-router-dom'

// 파일명: FailPage.jsx

export default function FailPage() {
     const { data } = useLocation(); 
     console.log(data);
  return (
    <div>
      <h1>❌ 결제 실패</h1>
      <p>사유: {data.error_msg}</p>
    </div>
  )
}