//폴더명: pages
//파일명: RecipeDetail.jsx
//  - 개별 레시피 상세 페이지!

import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

//list페이지에서도 값을 꺼내갈 수있고 details에서도 데이터를 
// 검색해서 가져갈 수있기 때문에 더미데이터들은 자바스크립트
// 파일로 빼놓는게 좋다!

import data from '../data.js';

export default function RecipeDetail() {

  // 각각의 url주소를 이용해서 각각 다른 페이지처럼 동작하게 
  // 보이는 것!
  //  - 각각의 url주소를 이용해서 값을 공유할 때 기존값이 지워질 수있다.
  // url에 고유한 식별값을 넣어서 원하는 식별값 하나만 가져오기 

  // url에서 변경되는 값을 꺼내주세요!
  let { no } = useParams();
  console.log("중괄호 안 했을 때",no);

  // 1. 여러개의 값 중에 하나만 가지고 올것! 
  let recipe =  data.recipes[no -1];
  console.log(recipe);

  // 뒤로가기를 할 때 사용하는 페이지 이동 기능
  // 현재 페이지에서 url경로를 기록!
  let navi = useNavigate();

  function goBack(){
    navi(-1);
  }


  return (
    <div>
        <h3>RecipeDetail</h3>
        <h4>{recipe.name}</h4>
        <img style={{
              width: "150px",
              height: "150px"
              }}
             src={recipe.image}/>

        <ol>
          {
            recipe.instructions.map((one) => (
              <li>{one}</li>
            ))
          }
        </ol>

        <Link to='/' className='recipe-detail-btn'>
          뒤로가기
        </Link>
        <button className='recipe-detail-btn'
                onClick={goBack}>뒤로가기</button>
    </div>
  )
}