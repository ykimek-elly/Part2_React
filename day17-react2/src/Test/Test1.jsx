// Test1.jsx
// 실습 문제! 
import React from 'react'
import Coffee from '../components/Coffee'
import Movie from '../components/Movie'
import Product from '../components/Product'
import Book from '../components/Book'

export default function Test1() {

  return (
    <div>
      <h3>1번 문제 정답</h3>
      <Product name="아이스 아메리카노" price={2000}/>
      <Product name="아이스 카페라떼" />


      <h3>2번 문제 정답</h3>
      <Book title="리액트 한눈에 배우기"/>
      <Book title="자바스크립트 첫걸음" 
            author="김코딩"/>



      <h3>3번 문제 정답</h3>
      <Movie title="인사이드 아웃2" rating={9.3}/>
      <Movie title="범죄도시4" rating={3.2}/>


      <h3>5번 문제 정답</h3>
      <Coffee name="바닐라라떼" price={4000}/>
      <Coffee name="아메리카노"/>
    </div>
  )
}