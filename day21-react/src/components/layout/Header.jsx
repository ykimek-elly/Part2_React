import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
        <nav>
            <ul>
                <li>
                    <Link to="/">홈</Link>
                </li>
                <li>
                    <Link to="/products">상품들</Link>
                </li>

                <li>
                    <Link to="/details">상품 상세 설명</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}