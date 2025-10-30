import React, { useEffect, useState } from 'react'
import naverLoginImage from "../assets/naver_login.png";
import { useParams, useSearchParams } from 'react-router-dom';

export default function NaverLogin() {

    //고정된 key를 가진다! const를 이용한다.
    const client_id = "GFSzBJE0dtaGUYZYSPJD";
    const client_secret = "6QeG9Nxgj8";
    const rediect_url = "http://localhost:5173/naver";
    const state = "test";


    // 사용자의 정보를 저장하는 변수
    let [user,setUser] = useState(null);

    //  네이버는 리다이렉트 주소로! code =>인가코드온다.
    // 인가코드를 꺼내야된다. 
    // url ? 표 전에 있는 주소값을 읽을 때는 useParams()
    //     ? 뒤에 code=!@@#&lient_id=qerekaldg;
    const  [searchParam] =  useSearchParams();
    //console.log(code);

    // 응답받은 배열 객체 안에서 값을 꺼낸다. 
    const code = searchParam.get("code");
    //console.log("전달받은 코드:",code);

    // 페이지가 처음 열리면 한번만 실행해라!
    useEffect(()=>{

        // 1. 네이버 라이브러리 객체를 가져오기 !
        //   한번 만들어졌으면 두번은 안 만든다! 두번만들면 에러난다.
        if(!window.naver){
            console.log("네이버 라이브러리 다운로드 안됨!");
        }
        //console.log(window.naver);

        let naverLoginInfo = new window.naver.LoginWithNaverId({
            clientId : client_id,
            callbackUrl : rediect_url,
            //  팝업 속성 이용 
            //  isPop :true(팝업형태),false(웹 화면에 뜬다)
        });
        console.log(naverLoginInfo);

        naverLoginInfo.init();

     

    },[]);

    // 로그인 하면 새로 실행될 수있도록(동의화면에서 동의하면 사이트 리다이렉트 되면실행)
    useEffect(()=>{

        if(code){
            console.log("전달된 인가코드: ",code);
        }

        // 사용자 정보를 요청하는 코드를 작성
        const naverTokenUrl =
        `https://nid.naver.com/oauth2.0/token?grant_type=code&client_id=${client_id}&client_secret=${client_secret}&code=${code}`;

        fetch(naverTokenUrl)
        .then((resp) => resp.json())
        .then((data) => console.log(data));


    },[code]);  // code라는 값이 바뀔 때 마다 실행해라!



    function naverLoginClick(){

        const naverAuthUrl =
          `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=${rediect_url}`;
    
        // 페이지 이동!
        window.location.href= naverAuthUrl;
    }

    //  fetch() 
    //  - 브라우저에서 서버로 요청을 보내는 함수
    //  - 서버에서 데이터를 가져오거나 보낼때 사용하는 것!
    

  return (
    <div>
        <h1>네이버 로그인 </h1>
        <img src={naverLoginImage} alt="네이버 로그인 버튼" 
             onClick={naverLoginClick}/>

        <h3>사용자 정보 출력</h3>
        <p></p>
    </div>
  )
}

//  정보를 저장하는 쪽 기준 생각하시면 됩니다.
//  쿠키 : 내 컴퓨터에 정보를 저장한다!
//  세션 : 서버에 정보를 저장한다!
//  토큰 : 사원증