
import './App.css'
import KakaoLogin from './pages/KakaoLogin'
import { Routes, Route } from 'react-router-dom'
import NaverLogin from './pages/NaverLogin'
import KakaoMap from './pages/KakaoMap'
import Login from './pages/Login'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<KakaoLogin/>}/>
      <Route path='/naver' element={<NaverLogin/>}/>
      <Route path='/kakaomap' element={<KakaoMap/>}/> 
      <Route path='/login' element={<Login/>}/>        
     </Routes>
    </>
  )
}

export default App
