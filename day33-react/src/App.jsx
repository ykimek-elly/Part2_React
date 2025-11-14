
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import NaverSearch from './pages/NaverSearch'
import NaverNews from './pages/NaverNews'
import ClientPage from './pages/ClientPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/naver' element={<NaverSearch />}/>
        <Route path='/news' element={<NaverNews />}/>
        <Route path='/client' element={<ClientPage />}/>
      </Routes>
    </>
  )
}

export default App

/*
네이버 개발자센터
 클라이언트 아이디 :GFSzBJE0dtaGUYZYSPJD
 클라이언트 패스워드:6QeG9Nxgj8
*/