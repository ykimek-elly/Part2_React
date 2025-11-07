import axios from "axios";
import { useEffect, useState } from "react"

export default function BookMain() {

  // 4. BookMain컴포넌트 안에서 변수를 사용해야된다.
  let [books, setBooks] = useState([]);  //모든 도서에 관한 내용
  let [recent,setRecent] = useState([]); //최근 본 목록에 관한 내용

  // 1. 브라우저(크롬)가 처음 화면을 실행하면 딱 한번 서버에서
  //   데이터 가져오기!
  useEffect(()=>{

    async function axiosBooks(){
      // 2. 서버한테 요청하기~ (데이터 줘!!)
      //    데이터가 올 때까지 await 기다려!
      //    그리고 데이터가 다 오면 다시 실행해! async
        let resultBookx  =  await axios
                                 .get('https://api.itbook.store/1.0/new');
        console.log(resultBookx);
      // 3.화면에 보이기 
      setBooks(resultBookx.data.books);
     }
   
    //함수실행 
    axiosBooks();
  },[]);

  // 6. div클릭시 책의 정보를 스토리지 저장하는 코드
  function clickBook(book){
//     -1.책의 정보를 매개변수로 전달받기
       console.log("전달받은 북:" , book);

      //  기존 최근 목록에 새 책 추가(맨 앞에 추가)
       let updated = [book,...recent];


//     -2. 책의 정보를 객체 타입으로 저장하기 
//         첫번째는 로컬 스토리지, 두번째는 최근 본 목록만 저장하는 변수
//       로컬이든 세션 스토리지든 무조건 문자로 들어간다. json타입
       localStorage.setItem("recent",JSON.stringify(updated));
       setRecent(updated);
       console.log(updated);


  }


  return (
    <div>
      <h2>최근 본 목록</h2>
      {
        // 5. axios로 호출한 전체 데이터 출력하기 
        //    이벤트 div,image든 클릭을 하면 로컬 스토리지로 값 저장하기 
        books.map((book)=>(
          //  추 후에 책코드번호만 넘겨주면 책의 내용을 검색하기 쉬움!
          <div key={book.isbn13} 
               onClick={() => clickBook(book)} 
            >
            <h2>{book.title}</h2>
            <h5>{book.subtitle}</h5>
            <img src={book.image} width="200"/>
            <p>{book.price}</p>
          </div>
        ))
      }
    </div>
  )
}