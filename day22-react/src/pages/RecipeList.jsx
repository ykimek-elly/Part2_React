//폴더명: pages
//파일명: RecipeList.jsx
//  - 전체 레시피 목록 페이지

import { Pagination, Table } from 'react-bootstrap';
// data.js 파일안에서 data 변수를 가져오기한다.
import data from '../data.js';
import Recipe from '../components/Recipe.jsx';
// select태그 정보 가져오기!
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function RecipeList() {
  

  //1. 한 페이지당 보여질 개수를 저장하는 변수
  let [limit,setLimit] = useState(3);

  //2. 전체 데이터 
  let recipes = data.recipes;

  //2-1. 클릭을 할 때마다 limit의 값이 변하면 배열에서 0번부터
  // 바뀐 limit까지 값을 다시 짤라오는 변수가 하나 더 필요하다.
  // 짤라온 배열의 데이터를 기준으로 반복해서 태그를 보이게 하면 된다.
  let selectRecipes = recipes.slice(0,limit);

  //3. 총 페이지 수 계산
  let totalPages = recipes.length / limit;
  console.log("총 페이지수:",totalPages);

  //4.시작페이지 번호 
  let startPage = 1;
  let endPage = totalPages;


  // 5. 페이지 버튼 자동 생성
  //  jsx 리액트 문법은 자바스크립트에서 태그를 배열에 저장할 수있다.
  const pageItems = [];
  for(; startPage <= endPage; startPage++){
    pageItems.push(
        <Pagination.Item>{startPage}</Pagination.Item>
    );
  }


  function selectChange(event){
    setLimit(event.target.value);

  }

  function srechInput(event){
    console.log("키",event.key);
  }

  return (
    <div>
        <h1>RecipeList</h1>


        <Form.Select 
            onChange={selectChange}
            aria-label="Default select example">
            <option value="3">기본 3개씩</option>
            <option value="5">5개씩</option>
            <option value="10">10개씩</option>
            <option value="15">15개씩</option>
        </Form.Select>

        <br /><br />
        {/* input창  */}
        <Form.Control type="text"
                      placeholder="이름 기준 검색어 입니다." 
                      onKeyDown={srechInput}
                      />
        <br /><br />

        <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Rating</th>
            <th>Calories</th>
            <th>image</th>
            </tr>
        </thead>
        <tbody>
            {
                selectRecipes.map((rec)=>(
                    <Recipe rec ={rec}/>
                ))
            }
        </tbody>
    </Table>

    {/* 페이지네이션 버튼 만들기 */}
    <Pagination className='justify-content-center'>{pageItems}</Pagination>

    </div>
  )
}