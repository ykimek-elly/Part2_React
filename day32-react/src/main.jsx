import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// QueryClient 
// - 모든 서버 상태를 관리하는 중앙 관리자!
// - 캐시 저장, 자동갱신,에러 관리, 전역 접근

// 중앙 관리자 생성
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
       <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)