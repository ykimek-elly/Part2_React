
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import ModuleScssPage from './pages/ModuleScssPage'
import AxiosQuery from './pages/AxiosQuery'
import ReactQueryEx from './pages/ReactQueryEx'
import ReactQueryEx2 from './pages/ReactQueryEx2'
import ChartPage from './pages/ChartPage'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage/>}></Route>
      <Route path='/module' element={<ModuleScssPage/>}></Route>
      <Route path='/axios' element={<AxiosQuery/>}></Route>
      <Route path='/query' element={<ReactQueryEx />}></Route>
      <Route path='/query2' element={<ReactQueryEx2 />}></Route>
      <Route path='/chart' element={<ChartPage />}></Route>
    </Routes>
    </>
  )
}

export default App
