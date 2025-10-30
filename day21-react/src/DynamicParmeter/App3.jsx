import { Route, Routes } from "react-router-dom";
import "./App3.css";
import BoardList from "../components/board/BoardList";
import BoardDetail from "../components/board/BoardDetail";

export default function App3() {
  return (
    <div>
        <main className="body">
            {/* 1. 페이지이동을 위한 경로 모음! */}
            <Routes>
                <Route path="/" element={<BoardList />}></Route>
                {/* 2. 각각의 url주소를 만들기
                    각각 페이지를 만드는 이유는 공유를 할 때 
                    각각 url주소가 필요하다! 내용 공유
                    동적페이지 (동적 파라미터!) */}
                <Route path="/boardDetail/:no" 
                       element={<BoardDetail />}></Route>

            </Routes>

        </main>
    </div>
  )
}

/*
   <h3>인터넷 주소(url)창의 일부를 변수처럼 써서 <br />
            페이지 내용을 바꾸는 방법이다!
        </h3>
        <p>하나의 주소를 가지고 사용하면 주소를 공유했을때
            공유한 물건 혹은 게시글의 글 번호 달라질 수있다.
        </p>
*/