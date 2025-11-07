import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ContextMainPage from './pages/ContextMainPage'

function App() {
 
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<MainPage />}/> */}
         <Route path='/' element={<ContextMainPage />}/>
      </Routes>
    </>
  )
}

export default App