
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/shoppingHome/MainPage'
import ReduxPage from './pages/test/ReduxPage'
import ClsxEx from './pages/clsxpage/ClsxEx'
import SuccessPaage from './pages/shoppingHome/SuccessPaage'
import FailPage from './pages/shoppingHome/FailPage'
import FirebaseTest from './pages/shoppingHome/fireBaseTest'

function App() {


  return (
    <>
     <Routes>
        {/* <Route path='/' element={<MainPage />} />
        <Route path='/redux' element={<ReduxPage />} /> */}
        <Route path='/' element={<MainPage />} />
        <Route path='/clsx' element={<ClsxEx />} />
        <Route path='/success' element={<SuccessPaage />} />
        <Route path='/fail' element={<FailPage />} />
        <Route path='/firebase' element={<FirebaseTest />} />
     </Routes>
    </>
  )
}

export default App
