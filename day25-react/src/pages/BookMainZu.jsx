//파일명:BookMainZu.jsx

import React from 'react'
import { useBookStore } from '../store/bookStore'

export default function BookMainZu() {

    //1.저장소 연결하기!
    let {books,setBooks} = useBookStore();


    //3. 값이 없으니 다시한번 axios호출
    //     useEffect(()=>{

    //     async function axiosBooks(){
    //               let resultBookx  =  await axios
    //                                  .get('https://api.itbook.store/1.0/new');
    //       console.log(resultBookx);
    //       setBooks(resultBookx.data.books);
    //      }
    
    //     //함수실행 
    //     axiosBooks();
    //   },[]);
  return (
    <div>
        <h2>쥬드텐트를 이용해서 book정보 꺼내기</h2>
        {/* 2. HTML 문자타입으로 끼우기! */}
        <p>
            {JSON.stringify(books)}
        </p>
        <button onClick={
            () => setBooks([
                {
                    title : "리액트 마스터"
                }
            ])
        }>책 추가하기</button>
    </div>
  )
}