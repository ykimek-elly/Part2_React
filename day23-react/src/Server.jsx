import axios from 'axios'
import React from 'react'

export default function Server() {




    //버튼을 클릭했을 때 실행하는 함수를 작성을 한다.
    // 1. 버튼을 눌렀을 때 getUsers실행된다.
    async function getUsers(){
        // 2. 실행되면 내가 요청을 해야된다.
        // axios.get(url); - 한번에 하나의 요청만 해결한다(조회한다)
        // axios.all() - 여러개의 요청을 처리함 

        try{ // 혹시에러가 발생할 수도 있다.
            let users = await axios.get('https://jsonplaceholder.typicode.com/usershhh');
            // 3. 확인
            console.log(users.data);
            
        }catch(error){
            console.log(error);
        }

    }


  return (
    <div>
        <p>npm - node package manager</p>
        <p> 내 컴퓨터에서 라이브러리 도구들을 쉽게 받을 수 있도록 해주는 도구!</p>

        <h3>Axios?</h3>
        <p>웹 통신을 쉽게 해주는 도구!</p>
        <p>데이터를 조회해 올 때는 get()</p>
        
        <h4>Axios 장점</h4>
        <p>fetch보다는 명령문이 짧다!</p>
        <p>서버에서 받은 내용을 자동으로 자바스크립트 객체로 자동 변환해준다.</p>
        <p>요청을 취소하는 기능!</p>
        <p>웹이든 서버든 어디서든 잘 동작한다.</p>
        <p>한번에 여러개의 요청을 보낼 수있다.</p>

        <button onClick={getUsers}>사용자 정보 불러오기</button>
    </div>
  )
}