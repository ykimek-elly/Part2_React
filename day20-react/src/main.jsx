import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// 페이지 라우터 설정
// 1. npm i react-router-dom 다운받기
// 2. 경로를 관리하는 관리자 설정하기 main.jsx
//     <BrowserRouter>
// 3. 실제 경로를 등록! App에서 등록하기