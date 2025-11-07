// 파일명: Review.jsx
import React from 'react'
import { useBookStore } from '../store/bookStore'

export default function Review() {
    let { books } = useBookStore();
  return (
    <div>
        <h2>책 조회</h2>
        <p>
            {/* 배열을 문자타입으로 변경 */}
            {JSON.stringify(books)}
        </p>
    </div>
  )
}