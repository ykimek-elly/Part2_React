import data from '../data.js';
import Table from 'react-bootstrap/Table';
import Recipe from '../components/Recipe.jsx';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function RecipeList() {

    // console.log("내가 가져온 data");
    // console.log(data);

    let [limit,setLimit] = useState(3);

    const recipes = data.recipes.slice(0,limit)


    function selectChange(event){
        setLimit(event.target.value);
    }

  return (
    <div>
        <h3> RecipeList </h3>
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Calories</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {
            RecipeList.map ((rec)=>(
                <Recipe rec={rec}/>
            ))
        }
      </tbody>
    </Table>



    </div>
  )
}
