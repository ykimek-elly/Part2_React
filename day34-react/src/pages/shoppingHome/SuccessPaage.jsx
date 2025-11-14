import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SuccessPage() {
  // 페이지 이동이 일어났고 navigate에서 전달된 결제 정보인
  //  data를 꺼내서 활용!

  const { state } = useLocation();


  return (
    <div>
      <h2>결제 승인 페이지!</h2>
      <div>
        <p>결제번호: {}</p>
        <p>PG 사 : {}</p>
        <p>주문 번호: {} </p>
        <p>결제 금액: {}</p>
      </div>
    </div>
  )
}