import './Login.css'

export default function Login() {
  return (
    <div className="login-content-box">
         <h1>로그인</h1>
         <p>이메일과 비밀번호를 입력하세요.</p>
         <div className="login-mail">
         <input type="text" placeholder='이메일' />
         </div>
         <div className="login-pass">
            <input type="text" placeholder='비밀번호' />
            <p>비밀번호를 잊었나요?</p>
         </div>
         <button>로그인</button>
         <p className="login-join">계정이 있으신가요? <span>계정생성</span></p>
         <ul>
            <li><img src="https://img.icons8.com/color/512/google-logo.png" alt=""/>구글로 로그인</li>
            <li><img src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt=""/>페이스 북으로 로그인</li>
            <li><img src="https://img.icons8.com/?size=1200&id=xotVgSU9NXpo&format=jpg" alt=""/>카카오로 로그인</li>
            <li><img src="https://w7.pngwing.com/pngs/430/227/png-transparent-naver-logo-n-search-engines-thumbnail.png" alt=""/>네이버로 로그인</li>
         </ul>
    </div>
  )
}
