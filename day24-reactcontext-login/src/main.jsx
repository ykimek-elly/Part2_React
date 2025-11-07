import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// 부트스트랩!
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './AuthContext.js'

createRoot(document.getElementById('root')).render(

  // 전역에서 공유할 값 (value에 넣어서 저장소로 보낸다.)
  let user =  {
        user: {
            id :"qwer",
            pw :"qwer11!"
        }
      }
  <StrictMode>
    <BrowserRouter>
      <AuthContext.Provider value=({user})>
        <App />
      </AuthContext.Provider>
    </BrowserRouter>
  </StrictMode>,
)

// 설정을 할 때 value 값을 꼭 집어줘야된다.