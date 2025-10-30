
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import RecipeDetail from './pages/RecipeDetail'
import RecipeList from './pages/RecipeList'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<RecipeList/>} />
      <Route path='/detail' element={<RecipeDetail />} />
     </Routes>
    </>
  )
}

export default App
