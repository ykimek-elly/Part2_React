import { Route, Routes } from 'react-router-dom'
import './App.css'
import BoardDetail from './pages/BoardDetail'
import BoardAdd from './pages/BoardAdd'
import BoardList from './pages/BoardList'

function App() {
 
  return (
    <>
      {/* 헤더 */}

      {/* 메인영역 
        <Route path='url경로' elemnt='보여질 컴포넌트명' />
        /  --> 내 메인페이지 보여줘 url 이다
        /boardDetail --> 내 메인페이지 말고 boardDetail 페이지 보여주 url
      
        인터넷 주소인 url은 소문자로 시작하기 때문에 컴포넌트명과 
        구별하려고 소문자로 시작했다.
      */}
      <Routes >
        <Route path='/' element={<BoardList />}></Route>
        <Route path='/boardDetail' element={<BoardDetail />}></Route>
        <Route path='/boardAdd' element={<BoardAdd />}></Route>
      </Routes>
      

      {/* 푸터 */}






      {/* <br /><br /><br /><br /><br />
      <h3>프로젝트 설정 순서!</h3>
      <ol>
        <li>프로젝트 생성! npm create~~~~ </li>
        <li>페이지 이동 기능 넣어야되기 때문에 리액트라우터돔을 다운로드 받기</li>
        <li>내가 만들 페이지들을 설정 (헤더,메인,푸터) </li>
        <li>각각의 페이지 컴포넌트를 만든다.</li>
        <li>페이지 이동 설정!(Routes,Route)</li>
        <li>테스트 진행! npm run dev</li>
      </ol> */}
    </>
  )
}

export default App