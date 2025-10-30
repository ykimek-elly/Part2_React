import { Route, Routes } from 'react-router-dom'
import './App.css'
import RecipeList from './pages/RecipeList'
import RecipeDetail from './pages/RecipeDetail'

function App() {


  return (
    <>
    {/* index.html 파일에 필요한 화면을 끼워주는 형태가 리액트다! */}
      <Routes>
        <Route  path='/' element={<RecipeList/>}/>
        <Route  path='/details/:no' element={<RecipeDetail/>}/>
      </Routes>
    </>
  )
}

export default App


/*
1. 필요한 라이브러리들!
   npm install react-router-dom  (페이지 이동!)
   npm install react-bootstrap bootstrap
   npm install react-icons

2. 새로운 폴더를 만들었기 때문에 한번은 다운로드를 받아야된다.
  - 세팅
  -  리액트 라우트 돔 - 페이지를 관리하는 브라우저태그를 설정 (main.jsx)
  -  부트스트랩 라이브러리 import하기! (main.jsx)
*/