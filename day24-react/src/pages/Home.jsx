import axios from 'axios';
import React, { useState } from 'react'

// 내가 만드는 HTML 태그를 이용할 때 Home 
// Home 새로운 태그를 만들떄 내가 원하는 태그들을 묶어서 하나로 만든다.
// return 내가 묶은 태그들을 화면에 보여줘~

// 서버 - 데이터를 보관하는 컴퓨터!
//     - 정보 창고!
export default function Home() {

    const movie_api_key = "fd6f076854e4743338384c8c7083fbd1";
    const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
  
    // 화면이 바꾸면 즉 데이터가 바뀌면 브라우저실행중에 데이터가 바뀌면
    // 화면을 다시 부분 업데이트해라!
    let [boxOfficeList , setBoxOfficeList] = useState(null);
    
    // 버튼을 클릭했을 때 실행
    async function movieClick(){
        // 1. 통신을 할 수있는 axios를 가져오기
        // get(url) - 서버한테 데이터 주세요! 
        // 2. 데이터가 다 올 때까지 기다려라! (await)
        // 3. 데이터가 도착을 하면 나중에 실행하는 async
        // 4. movies에 저장을 한다 (우리가 사용하는 객체타입으로 자동변환)
        let movies = await axios.get("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=fd6f076854e4743338384c8c7083fbd1&targetDt=20251024");
        
        // 5. 결과 확인
        // console.log(movies);
        let boxOfficeResult = movies.
                              data.
                              boxOfficeResult.
                              dailyBoxOfficeList;

        // 6. 화면에 업데이트 하기 위해서 저장
        setBoxOfficeList(boxOfficeResult);
        console.log(boxOfficeResult);
    }

  
  return (
    <div>
        <h1>Home - Main 페이지</h1>
        <h3>영화 진흥위원회에서 영화 정보를 가져오기!</h3>

        {/* 영화 데이터를 출력하는 태그 */}

        <button onClick={movieClick}>일별 박스오피스 조회</button>
        <button>주말/주간 박스 오피스 조회</button>

        <ul>
            {/* 리스트 타입으로 내용을 출력하기 
                7. 화면에 보이기! 
            */}
        {boxOfficeList &&
          boxOfficeList.map((movie) => (
            <li key={movie.movieCd}>
              {movie.rank}위 : {movie.movieNm}  
              ({movie.openDt}) — 관객수 {movie.audiCnt}명
            </li>
          ))}
        </ul>



        <ol>
            <li>https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do 접속!</li>
            <li>회원가입 및 로그인 </li>
            <li>비밀 키를 발급 받기</li>
        </ol>
    </div>
  )
}