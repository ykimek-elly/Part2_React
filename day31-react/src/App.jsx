
import './App.css'
import { Route, Routes } from 'react-router'
import Main from './pages/Main'
import LoginPage from './pages/LoginPage'
import MyPage from './pages/Mypage'

function App() {
  

  return (
    <>
      {/* <h1>테일윈드!</h1>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> */}
  <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/login" element={<LoginPage/>}></Route>
    <Route path="/mypage" element={<MyPage/>}></Route>
  </Routes>
    </>
  )
}

export default App
