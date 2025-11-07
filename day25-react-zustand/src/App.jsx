
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'

function App() {
 
  return (
    <>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </nav>

    {/* 새로고침,utl로 접근하면 앱이 다시 시작된다라는 뜻으로 생각한다
    그래서 저장소가 사라진다. 앱을 다시 실행하지 않고 링크태그를 
    이용해서 단순히 화면만 교체하면 저장소가 사라질 이유가 없다!
       ** 미들웨어 ** */}

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        
      </Routes>
    </>
  )
}

export default App