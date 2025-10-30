// 모듈css 포함하는 것!
import { useEffect, useState } from "react";
import styles from "./KakaoLogin.module.css";
import kakaoImage from "../assets/kakao_login.png";

export default function KakaoLogin() {

  const kakao_app_key = "d345ea464bcd0bcbc1a5358ebf08b3f7";

//   카카오로그인을 통해서 사용자 정보를 받아오면 프로필 이미지를 보일 수있도록
    let [image,setImage]  = useState("");

//   if(window.Kakao){
//       console.log("카카오 객체 다운로드 됨!");
//     //   console.log(window.Kakao);
//       window.Kakao.init(kakao_app_key);
//       console.log(window.Kakao.isInitialized());
//   }

// 화면 켜질 때 딱 한번만 실행!
// 개발자모드,디버그모드가 같이 실행되서 2번 객체를 만들어서 나오는 에러다!
  useEffect(()=>{

    //console.log(window.Kakao);
    if(!window.Kakao.isInitialized()){
        window.Kakao.init(kakao_app_key);
       // console.log("Kakao.init: Already initialized");
       // console.log("객체를 한번 만들었는데 왜 또만들지? 이런 에러입니다.");
    }

    console.log("여기까지 OK!");
  },[]);

   function kakaoBtnClick(){

    window.Kakao.Auth.login({
        // 동의 받을 항목 이름을 작성하기 
        scope : "profile_nickname,profile_image",

        // 동의화면이 떴다면 
        // 매개변수 - resp 변수는 카카오에서 응답한 정보를 가지고 온다.
        success : function(resp){
            console.log("성공!",resp);

            // 이 안에서 사용자 정보를 받는 코드를 작성을 한 후에
            // 계속하기를 눌렀을 때 페이지 이동!
            window.Kakao.API.request({
                url : '/v2/user/me',
                success : function (res){
                    // console.log(res.properties.profile_image);
                    // res 사용자 정보를 받았다.
                    // properties 변수 안에 
                    // profile_image 변수값을 가져와라!
                    // 컴포넌트의 태그들이 가져다가 사용할 수있는 저장공간에
                    // 집어 넣는다.
                    setImage(res.properties.profile_image);
                    // 이미지 url을 꺼내기 
                },
                fail: function(error){
                    console.log(error);
                }
            });


        },
        // 동의화면이 안 떴다면
        fail :function(){
            console.log("실패!");
        }
    });

   }


  return (
    <div>
        <h1>카카오 로그인</h1>

        <img src={kakaoImage} 
             alt="카카오 로그인 이미지"
             onClick={kakaoBtnClick}/>
        
        {/* 로그인이 되었다면 img태그가 보이면 된다.
            로그인이 안됬다면 img태가 안보이게 할 것! 
        <img src={} alt=""/>*/}
         {
            image && <img src={image} alt="프로필 사진" />
        }


        <br /><br /><br />


        <button className={styles.primary}>버튼</button>
        <button className="btn">버튼2</button>

        <p className="btn">디자인할 때 className에 css이름을 작성하면
              어떤 태그든 전체적으로 다 적용이된다.
        </p>
    </div>
  )
}

/*
  서버(Server)
   - 정보를 주는 컴퓨터
   - 모든 정보를 내 컴퓨터에 저장할 수없으니깐!

  패킷(Packet)
   - 인터넷에서 오고가는 택배상자!
   - 큰 데이터를 작게 나눠서 보내는 역할!

  패킷안에 구성 
   - 헤더 (header) - 택배 송장 
     정보들 (받는이, 보낸이,주소,폰번호,등등등) - 자바스크립트 객체형식
   
  - 바디(boyd) - 택배 물건
     실제 데이터들!
   
  카카오 개발자 센터
  1. 카카오 서비스 기능을 사용하려면 카카오가 제공하는 비밀번호를 
     받아야된다.  
    
  2. App 생성하기
  3. 앱 메뉴 안 쪽 들어가서 javascript 키 가져오기 const로 저장
  4. 플랫폼 설정 
     내가 접속할 내 인터넷 주소를 등록!
     localhost : 내 컴퓨터 (주소)
     5173 : 포트 번호 802호 (호 수 )

  5.동의화면 설정
  6. javascript 라이브러리 다운받기 script코드 index.html에 추가하기!


 리액트에서 사용하는 CSS 라이브러리 
  - CSS Module   KakaoLogin.module.css
  - styled-comonents js안에서 바로 css작성 
  - Tailwindcss 가장 많이 사용되고 있다.
     클래스 이름으로 바로 스타일 작성!
  
*/