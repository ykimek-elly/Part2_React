
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LocalStorage from './pages/LocalStorage'
import ThemeStorage from './pages/ThemeStorage'
import LoginStorage from './pages/LoginStorage'
import BookMain from './pages/BookMain'

function App() {


  return (
    <>
    <h3>localStorage?</h3>
    {/* <p>브라우서에서 사용자 정보를 잠깐 저장해두는 창고!</p>
    <p>영구 보관하는 창고!</p>
    <p>사용자가 직접 지우기 전까지 저장된다.</p> */}
    
    <Routes>
        <Route path='/' element={<LocalStorage />}></Route>
        <Route path='/local' element={<ThemeStorage />}></Route>
        <Route path='/login' element={<LoginStorage />}></Route>
        <Route path='/book' element={<BookMain />}></Route>
        <Route path='/book' element={<BookMain />}></Route>
        <Route path='/bookreview' element={<Review />}></Route>
    </Routes>
     
    </>
  )
}

export default App
