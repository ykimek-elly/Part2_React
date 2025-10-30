import { useState } from "react";
import Recipe from "../components/Recipe.jsx";
import data from "../data.js"
import { Table } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

export default function RecipeList() {


    // console.log("내가 가져온 data");
    // console.log(data.recipes);

    //   // 0번째 배열에 id값을 꺼내기 
    //   console.log(recipes[0].id);





    //.slice(0,3)를 이용해서 시작과 끝을 지정한다.
    // const recipes = data.recipes.slice(0,3);

    //10개만 출력하겠다!
    // const recipes = data.recipes.slice(0,10);

    //20개만 출력하겠다!
    // const recipes = data.recipes.slice(0,20);

    

    let [limit,setLimit] = useState(3);

    const recipes = data.recipes.slice(0,limit);
    
    function selectChange(event){
        setLimit(event.target.value);
    }

    // 전체 데이터 가져오기 
    // const recipes = data.recipes

    // 시작번호 구하기 
    // const start = (page -1) * 보여질 개수(limit)

    // 끝번호 구하기
    // const end = 보여질 개수(limit) + 시작번호 

    // 자르기 
    // const recipes = data.recipes.slice(start,end);

  return (
    <div>
        <h1>RecipeList</h1>   
           {/* 기본적으로 3개를 보여주는데 select태그를
        누르면 누른 개수만큼 레시피 게시글 보이기 
        Pagination (페이지네이션)?
         - 여러 페이지로 나눠서 보여주는 기능!
         - 데이터를 일정 개수씩 잘라서 여러 페이지로 나누어
           표시하는 기능

         - 총 페이지 수 계산
           데이터는 30개를 3씩 보여라~ 총 페이지 수 : 10page 
                        5씩 보여라~ 총 페이지 수: 6page
                        10개씩               : 3page
                        15개씩               : 2page
         - 현재 보여질 개수 
         - 시작번호,끝나는 번호 
         
          ex) 10씩 3페이지로 나눈다.
          1 페이지 0번 ~   9번
          2 페이지 10번 ~ 19번
          3 페이지 20번 ~ 29번 
          
          ex) 5개씩 6페이지로 나눈다. 배열을 기준!
          1 페이지 0  ~ 4번
          2 페이지 5  ~ 9번
          3 페이지 10 ~ 14번
          4 페이지 15 ~ 19번
          5 페이지 20 ~ 24번
          6 페이지 25 ~ 29번

          ex) 3개씩  10페이지로 나눈다. 배열을 기준
          1 페이지 0  ~ 2번
          2 페이지 3  ~ 5번
          3 페이지 6 ~  8번
          4 페이지 9 ~  11번
          ...
          
          1 페이지 시작번호 : 0
          2 페이지 시작번호 : 3
          3 페이지 시작번호 : 6
          
          1 페이지 끝번호 : 현재 보여질 개수에서 -1
          2 페이지 끝번호 : 현재 보여질 개수에서 -1

          1부터 시작하는 개수 30
          1페이지 시작 번호:  1
                 끝나는 번호: 3
        
        */}

    <Form.Select 

        onChange={selectChange}

        aria-label="Default select example">
      <option value="3">기본3개씩</option>
      <option value="5">5개씩</option>
      <option value="10">10개씩</option>
      <option value="15">15개씩</option>
    </Form.Select>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Cuision</th>
          <th>Ration</th>
          <th>Calories</th>
          <th>image</th>
        </tr>
      </thead>
      <tbody>

        {
            recipes.map((rec)=>(
                <Recipe rec ={rec}/>


        //         <tr>
        //   <td>{rec.id}</td>
        //   <td>{rec.name}</td>
        //   <td>{rec.cuisine}</td>
        //   <td>⭐{rec.rating}</td>
        //   <td>{rec.caloriesPerServing}</td>
        //   <td>
        //     <img style={{
        //         width: "80px",
        //         height: "80px"
        //     }}
        //     src={rec.image}/>
        //   </td>
        // </tr>
            ))
        }


        {/* <tr>
          <td>{recipes[0].id}</td>
          <td>{recipes[0].name}</td>
          <td>{recipes[0].cuisine}</td>
          <td>⭐{recipes[0].rating}</td>
          <td>{recipes[0].caloriesPerServing}</td>
          <td>
            <img style={{
                width: "80px",
                height: "80px"
            }}
            src={recipes[0].image}/>
          </td>
        </tr>
        <tr>
          <td>{recipes[1].id}</td>
          <td>{recipes[1].name}</td>
          <td>{recipes[1].cuisine}</td>
          <td>⭐{recipes[1].rating}</td>
          <td>{recipes[1].caloriesPerServing}</td>
          <td>
            <img style={{
                width: "80px",
                height: "80px"
            }}
            src={recipes[1].image}/>
          </td>
        </tr>
        <tr>
          <td>{recipes[2].id}</td>
          <td>{recipes[2].name}</td>
          <td>{recipes[2].cuisine}</td>
          <td>⭐{recipes[2].rating}</td>
          <td>{recipes[2].caloriesPerServing}</td>
          <td>
            <img style={{
                width: "80px",
                height: "80px"
            }}
            src={recipes[2].image}/>
          </td>
        </tr> */}




      </tbody>
    </Table>

      {/* 페이지네이션 버튼 만들기 */}
    <Pagination>
 
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item disabled>{6}</Pagination.Item> 
    
    </Pagination>


    </div>
  )
}
