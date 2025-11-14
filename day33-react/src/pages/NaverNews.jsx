
import axios from "axios";
import { useEffect, useState } from "react";


export default function NaverNews() {

  // 1. 네이버랑 통신하려면 아이디 값, 비밀번호 가져오기
  //    우회(프록시설정)
  //    400에러가  뜰 경우에는 실제 url에 넘어간느 변수들을 확인
  //              url 중간에 공백이나 한글이 들어가서 인코딩 깨져서 발생하는경우!
  const clientId = "GFSzBJE0dtaGUYZYSPJD";
  const clientSecret = "6QeG9Nxgj8";
  const url = "https://openapi.naver.com/v1/search/news.json?query=강동원";
  const proxy = "https://cors-anywhere.herokuapp.com/";


  const [news,setNews] = useState([]);
  // 2. 페이지가 열릴 때 마다 호출
  useEffect(()=>{
    // 3. axios이용해서 네이버랑 통신하기 
    axios
        .get(proxy + url ,{
                        headers : {
                           "X-Naver-Client-Id" :  clientId,
                           "X-Naver-Client-Secret" : clientSecret
                        }
                    })                            //요청
        .then((res) =>  {setNews(res.data.items);
                        console.log(res)});    //응답

  },[]);


  return (
    <div>
        <h3>네이버 뉴스 검색!</h3>

        <div className="news-section">
            <h3>제목: </h3>
            <img />
            <p>본문</p>
        </div>
    </div>
  )
}