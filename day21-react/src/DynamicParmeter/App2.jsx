import { Route, Routes } from "react-router-dom";
import "./App2.css";
import Test from "./Test";

export default function App2() {
  return (
    <div>
        <h3>동적 파라미터?</h3>

        {/* 기본적으로 경로들을 저장한다*/}

        <main className="body">
            <Routes>
                <Route path="/" element={<Test />}/>

            </Routes>

        </main>


        <p>url(인터넷 주소) 안에서 변하는 값을 꺼내서 데이터를 출력할 수있도록 
            도와주는 기능이다! </p>
        <p>props쓰게 되면 다른 페이지로 넘어갔다가 뒤로가기를 하면 props받은
            내용이 전부 사라진다.
        </p>
        <p>각각의 페이지를 만드는 것이 아니라 하나의 페이지를 만들어서 <br />
           url에 구별할 수있는 값을 넣어서 각각의 다른 페이지처럼 동작하게
           만들어주는 것! 
        </p>

        <p>url경로에 변하는 값을 넣어, 하나의 컴포넌트로 여러 다른데이터를
            표현할 수있도록 해주는 기능!
        </p>
    </div>
  )
}