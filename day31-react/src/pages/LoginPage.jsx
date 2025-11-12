// 파일명: LoginPage.jsx
// import가 안되면 혹시 내가 안에 코드가 있는지 확인

import { useState } from "react";
import { useLoginStore } from "../store/LoginStore";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  //1. 로그인 정보를 공유하는 저장소 가져오기!
  const { login } = useLoginStore();

  //2. input창에 입력한 값을 저장을 해야된다.
  //   useState === v-model 같은 역할을 한다.
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");


  // 페이지 이동시
  //  - 페이지 기록을 담당한다!
  const navigate = useNavigate();

  // 3. 버튼을 클릭했을 때 실행하는 함수 작성한다.
  function handleLogin() {
    // console.log("이메일:", email);
    // console.log("패스워드:", password);
    // 4. 객체 타입으로 묶었다!
    const userInfo = {
        email : email,
        password : password
    }
    // 5. 저장소로 보내기 
    login(userInfo);

    console.log("로그인 성공!");
    // 6. 즉시 마이페이지로 이동
    // return <Navigate to="/mypage" replace />;
    // 이벤트 함수들은 어떤 효과든 먹지 않는다!
    // 이벤트 함수들은 화면을 리턴하는게 아니예요!
    // 자바스크립트 코드 안에서 페이지를 이동을 할 때는 useNavigate()

    navigate("/mypage",{replace : true});
  }

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold">React Share</h1>
      <h3>Login to your account</h3>

      <div className="flex flex-col gap-3 mt-4 w-64 mx-auto">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email Address"
          className="border p-2"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="border p-2"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
        <p>Forget Password?</p>
        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}