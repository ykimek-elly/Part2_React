import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//부트스트랩 라이브러리 css를 포함해라!
import 'bootstrap/dist/css/bootstrap.min.css';
import App3 from './DynamicParmeter/App3.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <BrowserRouter>
    <App3 />
    </BrowserRouter>
  </StrictMode>,
)
