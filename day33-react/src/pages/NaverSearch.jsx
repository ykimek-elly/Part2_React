import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function NaverSearch() {

    //블로그 검색어의 내용을 저장하는 변수
    const [value , setValue] = useState([]);


  // 잠깐 가짜 서버인척 하려면! 제가 드린 사이트 주소에서 버튼을 클릭한다. 제한시간 10분!
  const proxy = "https://cors-anywhere.herokuapp.com/"

  // 페이지가 처음을 열리때 실행해라!
  useEffect(()=>{
    // 페이지가 처음열릴때 할일을 작성하기
    console.log("페이지 실행! useEffect실행됨!");
    const result = axios
                .get(proxy + "https://openapi.naver.com/v1/search/blog.json?query=폭군의셰프",
                    {
                        headers : {
                           "X-Naver-Client-Id" :  "GFSzBJE0dtaGUYZYSPJD",
                           "X-Naver-Client-Secret" : "6QeG9Nxgj8"
                        }
                    }
                )
                .then((res) => setValue(res.data.items));

    console.log("페이지 실행후 응답!",result);

  },[]);


  return (
    <div>
        <h3>네이버 검색 - 강동원</h3>
        {/* <p>{JSON.stringify(value)}</p> */}
        <ul>
            {
                value.map((one) => (
                    <li>{one.title}</li>
                ))
            }
        </ul>


        <br /><br /><br /><br />
        <h3>네이버 검색 서비스 사용!</h3>
        <p> 다른 출처의 요청을 허용할 지 말지 서버가 브라우저에게 알려주는 규칙</p>
        <p>서버가 사용하는 포트번호가 다르고 브라우저가 사용하는 포트번호가 다르다!그래서
           에러가 생긴다.
        </p>
        <p>출저(Origin)? - 3개의 규칙이 모두 같아야된다.</p>
        <p>도메인(naver.com),프로토콜(http,https),포트번호 </p>

        <h3>프록시(Proxy) -우회</h3>
        <p>네이버 서버를 속인다. 브라우저에서 직접 요청하는게 아니라 너랑 같은 서버인척!</p>
        <p> React(크롬) - 프록시 서버 우회 - 진짜 API 서버(네이버) - 프록시 서버 - React</p>
    </div>
  )
}