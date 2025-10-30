// Login.jsx   === Login.html 과 같다!

// 로그인 페이지 하나를 만든다.
import "./Login.css";

// 1. 내가 만들 태그의 이름을 작성한다.
function Login(){
  //2. 화면에 보여질 태그를 묶는다.
  // return 화면에 보여줘!

  let email = "";
  let password = "";

  // 3. 엔터를 누르면 input태그에 있는 이메일을 변수에 저장하기
  function enterInput(event){
    // console.log(event);
    // 이벤트변수에서 key정보를 가져오려면 어떤 키워드?
    console.log(event.key);

    let inputKey = event.key;
    if (inputKey === "Enter"){
      email = event.target.value;
      console.log(email);
    }

  }
  return (
    <div className="login-section">
        <div className="login-popup">
            <h1>로그인</h1>
            <input type="text" 
                   placeholder="이메일"
                   onKeyDown={enterInput}
                   />
            <input type="password" 
            placeholder="비밀번호"
            onKeyDown={enterInput}
            />

            <div className="login-state-box">
              {/* label태그는 기본적으로 줄바꿈 되는
              구조로 되어있다. block */}
              <label>
                  <input type="checkbox" />이메일 기억하기
              </label>

              <label>
                  <input type="checkbox" />로그인 상태 유지
              </label>
              <a href="/password">비밀번호 찾기</a>
            </div>

            <button>로그인</button>
            <p>
               처음이신가요? <a href="/join">회원가입</a>
            </p>


        </div>
    </div>
  )
}
export default Login;