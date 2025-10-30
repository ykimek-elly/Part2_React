import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Details from './Details'
import Login from './Login'

function App() {

  // // 배열 안에 배열이 들어가는 구조!
  // // 좌표 
  // // 학생들의 점수 국영수
  // // 지도나 퍼즐게임 
  // // 게시글 댓글 
  // let lunch = [
  //   [ 
  //     "🍚 밥", 
  //     {
  //       food: "🍗치킨"
  //     }
  //     , 
  //     "🥕 당근"
  //   ],
  //   ["🍜 라면", "🍙 주먹밥", "🍌 바나나"]
  // ];


  // console.log(lunch[0]);
  // // console.log(lunch[0][1]);
  // console.log(lunch[0][1].food);

  let scores = [
    [80, 90, 70], // 학생1
    [100, 85, 95], // 학생2
    [60, 70, 90]  // 학생3
  ];
   return (
    <>
       {/* <h3>학생 점수 리스트</h3>
       <p>{scores[0][0]}</p>
       <p>{scores[0][1]}</p>
       <p>{scores[0][2]}</p>

       <p>{scores[1][0]}</p>
       <p>{scores[1][1]}</p>
       <p>{scores[1][2]}</p>

       <p>{scores[2][0]}</p>
       <p>{scores[2][1]}</p>
       <p>{scores[2][2]}</p> */}
{/* 
       {
        //한번 반복을 하면 
        // line 변수에는 [80, 90, 70],
      //   scores.map((line)=>( //외부(행)
      //     // 1.80
      //     // 2.90
      //     // 3.70
      //     line.map((num) => ( //내부(열)
      //       <p>{num}</p>
      //     ))
      //   ))
      //  } */}

      
      {/* 내가 만든 페이지 
      1. 30분 까지 이미지 구현! 필수!
      아래 3중 하나는 선택!
      2. 시간이 남으면 학습트랙에 가서 day1,day2 풀어보기
      3. 오전에 한 내용을 복습해보기! ( 기존 실습 못 풀었던 거 풀기)
      4. 팀스터디를 구현하고 싶다!
      */}

      <Header />
      {/* <Login />
      <Details /> */}


      {/* 메인 컨텐츠 영역 */}
      <main>
      <Routes>
        {/* <Route path='/' element={<App />}/>*/}
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details/>} /> 
      </Routes>
      </main>

       <Footer />
     

      {/* 경로설정은 가장 아래쪽에 해도 된다. */}

      <br /><br /><br /><br />

      {/* App이 메인 화면이다! == body랑 똑같다! */}
      {/* 새로운 태그를 만들 때 함수로 묶어주기 -- 컴포넌트(조각) */}
      {/* return 화면에  내가 만든 태그 보여줘 */}
      {/* 함수는 내가 만든 HTML 태그를 브라우저 보여주는 도구! */}
      {/* 값이 바뀔 때마다 내가 직접 수정하는게 아니라 리액트 자체가 
      자동으로 값을 변경하고 화면도 다시 보여준다. */}

      </>
  )
}

export default App

/*
 <h3>JSX?</h3>
      <p>Javascript XML 줄임말</p>
      <p>리액트 안에서 HTML을 쓰는 것 처럼 코드를 작성하는 문법</p>

      <h3>XML?</h3>
      <p>데이터를 꾸며서 저장하고 전달하기 위한 언어다!</p>
      <p>사람도 읽을 수있고 컴퓨터도 읽을 수 있는 데이터의 포장 방식</p>
      <p>우리가 사용하는 HTML 태그형태로 되어있다.</p>
      <p>내가 직접 태그 이름을 만들어서 데이터를 표현하는 언어! </p>

*/