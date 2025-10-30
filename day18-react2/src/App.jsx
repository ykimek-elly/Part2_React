import { useState } from 'react'
import './App.css'

function App() {

  // 객체 타입, 배열을 게시글 
  //  남자 코드 추천  2025월 10월 23일 추천 0
  //  강남 우동 맛집  2025월 10월 23일 추천 0
  //  파이썬 독학 2025월 10월 23일 추천 0

  // let [user, setUser] = useState({
  //   name : "덱스",
  //   gender : "남성",
  //   age : 20
  // });

  // let [user2, setUser2] = useState({
  //   name : "에리나",
  //   gender : "여성",
  //   age : 20
  // });

  // let [user3, setUser3] = useState({
  //   name : "알렉스",
  //   gender : "남성",
  //   age : 20
  // });

  // 객체들을 배열에 담기 
  let [users,setUsers] = useState([
    { name: "덱스", gender: "남성", age: 20 },
    { name: "유나", gender: "여성", age: 22 },
    { name: "철수", gender: "남성", age: 25 },
    { name: "민지", gender: "여성", age: 19 }
  ]);

  // 객체들을 배열에 담기2 
  //  게시글,블로그, 댓글
  let [boardList , setBoardList] = useState([
    {title : "1등" ,content :"1등 출석",readcount : 0},
    {title : "2등" ,content :"2등 출석",readcount : 0},
    {title : "3등" ,content :"3등 출석",readcount : 0},
    {title : "4등" ,content :"4등 출석",readcount : 0},
  ]);
  return (
    <>  

        {/* 반복문을 이용해서 꺼내기 */}
        {
          boardList.map((board)=>(
            <div>
              <h3>{board.title}</h3>
              <p>{board.content}</p>
              <p>조회수: {board.readcount}</p>
            </div>
          ))
        }
        <br /><br /><br />



       {/* boardList 안에 0번째 title꺼내기 */}
        <p>{boardList[0].title}</p>
        <p>{boardList[1].title}</p>
        <p>{boardList[2].title}</p>
        <p>{boardList[3].title}</p>


       {/* <h3>사용자 정보</h3>
       <p>{user3.name}</p>
       <p>{user3.gender}</p>
       <p>{user3.age}</p>


       <h3>사용자 정보</h3>
       <p>{user2.name}</p>
       <p>{user2.gender}</p>
       <p>{user2.age}</p>


       <h3>사용자 정보</h3>
       <p>{user.name}</p>
       <p>{user.gender}</p>
       <p>{user.age}</p> */}
    </>
  )
}

export default App
/*
[🍎 사과]   [🍌 바나나]   [🍓 딸기]   [🍇 포도]
 ↑
지금은 사과만 보이게 “창문”처럼 가려둠


objectFit
 - 사진 비율은 유지하면서 프레임에 꽉 채움

 // 이미지들의 배열을 만들어서 이미지 주소를 저장한다.
  // 1. 사진을 순서대로 담아둔 리스트 가져오기
  const images = [
    "https://picsum.photos/id/1015/400/250",
    "https://picsum.photos/id/1016/400/250",
    "https://picsum.photos/id/1018/400/250",
  ];

  // 2. 현재 몇 번 째 사진인지 기억하는 변수
  //   set변수명 = 값 변경 + 화면 다시 그리기!
  let [index , setIndex] = useState(0);

  // 3. html 구조 잡고 디자인 하기 
  // 4. 이벤트 설정하기 
  //   - 버튼을 클릭했을 때 실행하는 함수들 만들기

  function prevSlide(){
    // 이전 슬라이드로 이동을 해라! 
    if(index > 0){
        setIndex(index -1);
        console.log("현재 공간의 번호: ",index);
    }else{
      setIndex(2);
    }

  }
  function nextSlide(){
    // 다음 버튼을 누르면 0 -> 1번으로 이동하기 
    if(index  < images.length -1){
      setIndex(index +1);
      console.log("현재 공간의 번호:",index);
    }else{
      setIndex(0);
    }
  }
 
<h3>캐러셀을 직접 만들기</h3>

     <h3>🎠 간단한 캐러셀 이동</h3>
     <div
          style={{
            width  : "400px",
            height : "250px",
            margin : "auto",
            borderRadius : "20px",
            overflow: 'hidden',
            //  transform : translateX 왼쪽,오른쪽이동
            //  transition : transform 시간s 
          }}     
      >
        <img src={images[index]} 
             alt="carousel" 
             
             style={{
              width: "100%",  변경  
              height : "100%",
              objectFit : "cover",
              transition : "0.5s"
             }}            
             />
      </div> 
      <div style={{
        marginTop : "1rem"
      }}>
          <button onClick={prevSlide}>⬅️이전</button>
          <button onClick={nextSlide}>다음➡️</button>
      </div>





     <br /><br /><br /><br />

     <h3>🎠 간단한 캐러셀</h3>
     <div
          style={{
            width  : "400px",
            height : "250px",
            margin : "auto",
            borderRadius : "20px",
            overflow: 'hidden',

          }}     
      >
        <img src={images[index]} 
             alt="carousel" 
             
             style={{
              width: "100%",
              height : "100%",
              objectFit : "cover",
              transition : "0.5s"
             }}            
             />
      </div> 
      <div style={{
        marginTop : "1rem"
      }}>
          <button onClick={prevSlide}>⬅️이전</button>
          <button onClick={nextSlide}>다음➡️</button>
      </div>

     <br /><br /><br /><br />
     <p> 한 화면에서 여러 사진이나 카드가 옆으로 쓱쓱 
         넘어가는 슬라이드</p>

      <h4>작동원리</h4>
      <ul>
        <li>여러 장의 사진을 먼저 한줄로 쭈욱 나열!</li>
        <li>하나만 보이게 하고 나머지는 숨기기</li>
        <li>버튼을 누르면 다음 사진으로 이동(옆)</li>
      </ul>
*/