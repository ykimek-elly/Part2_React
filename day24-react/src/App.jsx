import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NowShowing from './pages/NowShowing'
import Tabs from './pages/Tabs'

function App() {
 
  return (
    <>
      <Routes>
        {/*  / 인터넷주소가 들어오면 Home페이지 보여줘! */}
        {/* <Route path='/' element={<Home />}></Route> */}
        <Route path='/' element={<NowShowing />}></Route>
        <Route path='/tabs' element={<Tabs />}></Route>
      </Routes>
    </>
  )
}

export default App

/*
 서버를 만드는 이유는?
  - 다른 사람들이 내 사이트 들어와서 정보 공유!
  - 공통으로 접근 할 수 있는 저장소! 그래서 서버!
  - 데이터를 공유, 저장,보호하는 관리자! === 서버!

📱 프론트(React)      💻 서버(Node.js 등)     🗄️ 데이터베이스(MongoDB)
    ↓ 요청(Request)  →   ↓ 데이터 요청
    ↑ 응답(Response) ←   ↑ 데이터 응답



*/