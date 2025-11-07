import { useEffect, useState } from "react"

export default function LoginStorage() {

    // 1. user들의 정보를 저장하는 변수
    let [user,setUser] = useState(null);

    // 2.로그인 버튼을 클릭시 실행하는 함수
    function loginBtn(){
        // 실제로는 서버에서 받은 토큰(영화티켓!) 저장해야 하지만 
        // 가짜 토큰을 사용한다.
        // uuid4 라이브러리를 많이 사용한다. npm install uuid
        const fakeToken = "abc12345";

        //localStorage에 저장
        localStorage.setItem("token",fakeToken);

        // user상태를 업데이트 
        setUser({
            name: "누니",
            token : fakeToken
        });
        alert("✅ 로그인 성공, 토큰 저장됨:", fakeToken);
    }
    // 3. 페이지가 처음 열릴 떄 localStorage에 가서 토큰확인 하는 함수
    useEffect(()=>{
        // -1. localStorage에서 key 확인 
        let token = localStorage.getItem("token");

        if(token){
            // token이라는 값이 있다면! 
            setUser({
                name : "누니",
                token
            });
        }
    },[]);

    // 4. 로그 아웃 버튼 클릭시 localStorage에 있는 토큰을 삭제하는 함수
    function logoutBtn(){
        // -1. localStorage 삭제!
        localStorage.removeItem("token");
        //  2. user변수도 초기화!
        setUser(null);

        // 3. alert() 확인 
        alert("🚪로그아웃 완료! 토큰 삭제됨!");        
    }


  return (
    <div>
     {/* 토큰 값이 있어서 자동로그인이 됬을 때 보여줄 화면! */}

     {  user ? (
            <div>
                <h2>👋{user.name}님, 자동로그인 완료!</h2>
                <p>저장된 토큰 : {user.token}</p>
                <button onClick={logoutBtn}>로그아웃</button>
            </div>
        ): (
            <div>
                <h2>로그인 되지 않음❌</h2>
                <button onClick={loginBtn}>로그인</button>
            </div>
        )}
    </div>
  )
}

/*

   <h3>자동 로그인</h3>
        <ol>
            <li>로그인 버튼 클릭 - localStorage에 "token" 저장 </li>
            <li>페이지 새로 고침 - useEffect가 실행되 "token" 확인</li>
            <li>있으면 자동 로그인 상태로 전환!</li>
        </ol>
        <p>민감 정보(비밀번호,토큰) 절대 저장 금지!</p>
        <p>JWT 토큰 OAuth 간편하게 보안해서 로그인 할 수있는 라이브러리!</p>
        <p>토큰 만료 시간 설정</p>
        <p>세션스토리로 임시 로그인 처리</p>
        <p>또는 httpOnly 쿠키로 서버에서 관리</p>
*/