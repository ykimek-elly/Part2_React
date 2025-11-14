import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { BrowserRouter } from 'react-router-dom'

// 모든 리액트를 관리하는 관리자들은 main.jsx파일에 추가하는것이 좋다!
// 리덕스 툴킷이랑 App 이랑 연결해서 페이지에서도 리덕스를 사용하고
// 컴포넌트 조각들도 사용할 수있도록 연결 !

// Provider 연결 App - 리덕스랑 연결한다
// 태그를 아무곳이 사용해도 상관없지만 페이지까지 관리하는 전역상태를
// 만들기 위해서 BrowserRoute밖에 사용한다.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>    
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)