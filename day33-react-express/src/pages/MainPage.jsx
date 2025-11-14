import React from 'react'

export default function MainPage() {
    
    userEffect(()=>{
        axios
            .get("http://localhost:10004/products")
            .then((res)=> console.log(res));
    },[])
  return (
    <div>
        <h1>React 에서 내가 만든 서버로 요청보내기</h1>
    </div>
  )
}
