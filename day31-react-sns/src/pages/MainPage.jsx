
import { useForm } from "react-hook-form";
import { useJoinStore } from "../store/join.store";
import { Link } from "react-router";

export default function MainPage() {
  // onChange()가 각각 input창에서 일어난다. 그러면 useState()에 의해서
  // 화면이 계속 다시 그려진다. 성능이 떨어지고 코드는 복잡하고 유지보수성 최악!
  // 이걸 해결하기 위해서 React Hook Form

  // 한 곳에서 관리한다.
  // useForm()
  //  - 입력창 자동관리 도구
  //  - 제출 처리 도구
  //  - 검증, 에러,초기값설정 도구
  //  - register : 입력창 등록하는 도우미!

  const { register, handleSubmit } = useForm();

  // 저장소에 저장하기
  const { addUser } = useJoinStore();

  //  입력값이 모두 data라는 객체에 담겨서 들어온다.
  function on(data) {
    console.log("입력한 값들: ", data);
    //console.log("아이디: ",data.id);
    addUser(data);
    console.log("회원가입이 성공적입니다!");
  }

  return (
    <div>
      <h1>SNS 실습!</h1>
      <h3>React Hook Form!</h3>

      <nav>
        <Link to ="/dash">회원목록 보러가기</Link>
      </nav>
      <button>
        <Link to="/dash">회원 목록 보기(버튼식)</Link>
      </button>

      <br /><br /><br />

      <section className="join-box">
        <form onSubmit={handleSubmit(on)}>
          <input {...register("id")} type="text" placeholder="아이디" />
          <input {...register("pw")} type="text" placeholder="비밀번호" />
          <input {...register("name")} type="text" placeholder="이름" />
          <input {...register("birth")} type="text" placeholder="생년월일" />
          <select {...register("mobile")}>
            <option value="SKT">SKT</option>
            <option value="KT">KT</option>
            <option value="LGU+">LGU+</option>
          </select>
          <input type="radio" value="남" {...register("gender")} />
          남성
          <input type="radio" value="여" {...register("gender")} />
          여성
          <input {...register("address")} type="text" placeholder="주소" />
          <button type="submit">회원가입</button>
        </form>
      </section>

      <br />
      <br />
      <br />
      <br />
      <p>input창이 너무 많으면 관리가 힘들다!</p>
      <p>입력창 관리 자동화 기계</p>
      <p>외부라이브러리라 다운로드 받아야된다.</p>
    </div>
  );
}

/*

// 폴더명: pages
// 파일명: MainPage.jsx

import { useState } from "react"

export default function MainPage() {

    let [id,setId] = useState("");
    let [비밀번호,setId] = useState("");
    let [이름,setId] = useState("");
    let [생년월일,setId] = useState("");
    let [통신사,setId] = useState("");
    let [성별,setId] = useState("");
    

    // onChange()가 각각 input창에서 일어난다. 그러면 useState()에 의해서
    // 화면이 계속 다시 그려진다. 성능이 떨어지고 코드는 복잡하고 유지보수성 최악!
    // 이걸 해결하기 위해서 React Hook Form

  return (
    <div>
        <h1>SNS 실습!</h1>
        <h3>React Hook Form!</h3>
    
        <section className="join-box">
            <input onChange={(e) => setId(e.target.value)}
                   type="text"
                   placeholder="아이디"/>
            <input onChange={(e) => setPw(e.target.value)}
                   type="text" placeholder="비밀번호"/>
            <input onChange={(e) => setPw(e.target.value)}
                   type="text" placeholder="이름"/>
            <input type="text" placeholder="생년월일"/>
            <input type="text" placeholder="통신사"/>
            <input type="text" placeholder="성별"/>

            <button>회원가입</button>
        </section>



        <br /><br /><br /><br />
        <p>input창이 너무 많으면 관리가 힘들다!</p>
        <p>입력창 관리 자동화 기계</p>
        <p>외부라이브러리라 다운로드 받아야된다.</p>
    </div>
  )
}


*/