// MyPage.jsx

import React from "react";
import { useLoginStore } from "../store/LoginStore";
import { Navigate, useNavigate } from "react-router-dom";

export default function MyPage() {
  // 1. 공유하는 공간(저장소)에서 로그인 정보가 가져오기
  const { user , logout} = useLoginStore();

  const navigate = useNavigate();

  // 2. 로그인 정보가 없으면 로그인 페이지로 이동!
  // ""
  if (!user) {
      return <Navigate to="/login" replace />;
    //  html,javascript --> 페이지 이동 window.location.href
    // 유저의 정보가 없으면 MyPage자체를 실행할 이유가 없다!
    // 즉시 로그인 페이지로 이동해라!
    // <Navigate to="이동할 주소" replace />
    //  replace 속성
    //   - 뒤로가기 막음!
    //   - 브라우저 히스토리에 새 기록을 추가하지 말아라!
    //   - 인증이 필요한 실무에서는 강제로 이동시킨 경우 replace꼭 작성한다.
    //  컴포넌트 안에서 바로 return 을 하는 경우에는 Navigate를 사용
    //  가능하다.

    // function show(){
    //     // Navigate이거를 사용하지 못한다. useNavigate()
    // }
  }

//    로그아웃 버튼을 클릭하면 실행될 함수 
  function handleLogout(){
        logout();   // 1. user = null (로그아웃)
        navigate("/login"); // 2. 즉시 로그인 페이지로 이동!
  }

  return (
    <div className="text-center mt-10">
      {/* 3. 로그인이 되었다면 보여질 창! */}
      <h1 className="text-3xl font-bold mb-4">마이페이지입니다!</h1>

      <p className="text-xl">
        로그인한 이메일: <strong>{user.email}</strong>
      </p>

      <button  className="bg-red-500 text-white p-2 rounded mt-5"
              onClick={handleLogout}>로그아웃</button>

      {/* 마이페이지 창 
           저장소에서 로그인 user기록을 가지고 와서 로그인 정보가 
           있다면 마이페이지 입니다. h1태그를 먼저 보여줌 
           만약 로그인 정보가 없다면! 로그인페이지로 이동하기*/}
    </div>
  );
}