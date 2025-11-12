
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import ProgressBar1 from './pages/ProgressBar1'
import ProgressBar2 from './pages/ProgressBar2'

function App() {


  return (
    <>
     <Routes>
           {/* <Route path='/' element={<MainPage />}></Route>   */}
           <Route path='/profile' element={<ProfilePage />} />     
           <Route path='/' element={<ProgressBar1 />} /> 
           <Route path='/bar' element={<ProgressBar2 />} /> 
     </Routes>
    </>
  )
}

export default App
