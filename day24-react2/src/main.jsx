import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyContext } from './MyContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* BrowserRouter 전체 공유하는 공간은 태그를 안쪽이든 바깥이든 상관없다 */}
      <MyContext.Provider value={{
        userName :"SeoHee"}}>
        <App />
      </MyContext.Provider>
    </BrowserRouter>
  </StrictMode>,
)