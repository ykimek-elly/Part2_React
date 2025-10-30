import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';


function App() {
 
  return (
    <>
     <h3>리액트에서 페이지 이동!</h3>
     <h4>React Routing</h4>

     {/* Header는 모든 페이지에서 공통을 보여야된다.
     App안쪽에 어떤 url이 들어오면 어떤 경로(컴포넌트를) 보여줄지
     설정을 해야된다. */}
     <Header />

      {/* 실제 경로를 작성할 때 Routes - 길들의 묶음 */}
     <Routes>    
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/content" element={<Content />} />
     </Routes>

      



     <br /><br /><br /><br />
     <h6>리액트 라우터 돔 경로를 지정하는 라이브러리가 없을 수있다.</h6>
     <p>다운 받기 npm install react-router-dom </p>

     <ul>
      <li>우리가 만든 컴포넌트를 매칭하는 기술!</li>
      <li>라우터는 주소별로 어떤 화면을 보여줄지 약속한 지도!</li>
      <li>클릭을 할 때마다 새로운 페이지로 안나가고 화면만
          슬쩍 갈아끼우는 것이다!
      </li>     
    </ul>

    <h3>URL????</h3>
    <p>인터넷 주소!</p>
    <p>https://www.naver.com</p>




    </>
  )
}

export default App