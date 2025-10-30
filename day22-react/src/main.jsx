import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// 부트스트랩 라이브러리 파일 import 하기!
import 'bootstrap/dist/css/bootstrap.min.css';
import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <App2 />
    </BrowserRouter>
  // </StrictMode>,
)
