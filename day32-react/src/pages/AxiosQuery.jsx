import axios from "axios";
import { useEffect, useState } from "react"

export default function AxiosQuery() {

  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{

    // 서버랑 통신해서 데이터를 가져올 때 
    // 데이터를 가져오는 목적이 크지만! 에러처리
    // 로딩 상태 
    // 데이터를 가져오기 시작할 때 로딩상태! 

    axios
         .get("https://dummyjson.com/users?limit=5")
         //에러처리
         .catch((err)=>{
            setError(err);
         })
         //에러가 발생하든 안하든 무조건 실행
         .finally(()=>{
            setLoading(false);
         });

  },[]);

  // 로딩상태를 처리하는 문법!
  if(loading) return <p>데이터를 가져오는 중...</p>

  // 통신을 하다가 에러를 처리하는 문법!
  if (error) return <p>에러 발생!</p>

  return (
    <div>
        <h2>Axios 예제!</h2>

        




        <br /><br /><br />
        <ul>
            <li>웹이랑 통신하는 라이브러리!</li>
            <li>프론트엔드랑 백엔드랑 연결하는 도구다!</li>
            <li>React - Axios - 서버</li>
            <li>HTTP(HyperText Transfer Protocol) <br />
                웹 브라우저(크롬,엣지,사파리)와 서버가 데이터를
                주고 받는 약속!(규칙!)
            </li>
            <li>요청(request) 응답(response)</li>
            <li>요청을 할  때 규칙 데이터를 가져와! GET</li>
            <li>데이터를 추가한다 POST</li>
        </ul>
    </div>
  )
}