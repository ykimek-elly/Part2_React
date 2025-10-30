import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProdutcDetail from './pages/ProdutcDetail'
import Header from './components/layout/Header'

function App() {
  
  return (
    <>
      {/* 웹 페이지에서 공통적으로 사용하는 컴포넌트들을 App 작성! */}
      <Header />
      {/* 페이지 이동을 하기 위해서 사용하는 기능! */}
        <main className='body'>
          <Routes>
            <Route path ="/" element={<Home />}/>
            <Route path ="/products" element ={<ProductList />} />
            <Route path= "/details"  element ={<ProdutcDetail />} />   
          </Routes>
        </main>
    </>
  )
}

export default App