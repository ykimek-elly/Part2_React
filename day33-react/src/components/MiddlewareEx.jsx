import axios from "axios"

export default function MiddlewareEx() {

    const instance = axios.create({
        baseURL : "https://dummyjson.com/",
        timeout : 5000 // 선택적! 타임아웃!
    })

    //  자동으로 내가 가지고 있는 토큰값 추가
    //  호출이 되기 전에 중간에서 가로채기
    instance.interceptors.request.use((config) =>{
        console.log("요청 나감!");

        console.log("요청 중이다!...");

        console.log("요청 :" ,config.url);
        console.log("요청 함수:",config.method);

        return config;
    });

    // 응답(response) 인터셉터
    instance.interceptors.response.use(
        (res) =>{
            console.log("응답 인터셉터");
            console.log("응답 서버로부터 왔다!");
            console.log(res.status);
            return res;
        },
        (error) =>{
            console.log("응답 에러 발생:",error);
            return Promise.reject(error);
            // 바로 try , catch처리를 하는 곳으로 바로 이동한다.
        }
    );

    // 버튼을 누르면 실제 요청 보내기 
    async function onRequest(){
        const res = await instance.get("/users/1");
        console.log("실제 데이터",res.data);
    }

    // 실행 순서
    // 1. 브라우저 페이지가 열리면 실행한다.
    // 2. 요청 인터셉터가 먼저 나온다.(내가 검사할께!기다려!)
    //    콘솔도 찍고 API key자동으로 채운다. 저장소(store)에서
    //    데이터를 자동으로 가져오는 기능!
    // 3. 진짜 서버로 요청이 나간다.
    // 4. 서버가 응답을 만들어서 다시 보낸다.
    // 5. 응답 인터셉터가 먼저 받음!
    //    에러? 콘솔찍기 이상이 없으면 return 
    // 6. 컴포넌트의 데이터를 저장하고 화면에서 실제 데이터를 확인한다.

    // 실행 -> 요청 인터셉터 -> 서버 -> 응답 인터셉터 -> 실제코드!

  return (
    <div>
        <h3>미들웨어? - 중간에 낀다!</h3>

        <button onClick={onRequest}>요청 보내기 테스트</button>

        <br /><br /><br />
        <p> 중간에서 검사하고 , 고치고, 막아주는 것!</p>
        <p> 어떤 일이 일어나기 전에 중간에서 확인/수정/막기 </p>

        <p>API 요청에 토큰 자동 삽입</p>
        <p>에러가 났을 때 로그인 페이지로 이동</p>
        <p>서버 응답을 모두 일정한 형태로 정리</p>
        <p>로딩 중. 에러 처리 자동화</p>



    </div>
  )
}