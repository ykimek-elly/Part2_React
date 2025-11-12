
import { Route, Routes } from 'react-router'
import './App.css'
import MainPage from './pages/MainPage'
import Dashboard from './pages/Dashboard'
import UploadModel from './pages/UploadModel'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/dash' element={<Dashboard/>} />
       <Route path='/upload' element={<UploadModel />}/>
    </Routes>
    </>
  )
}

export default App
