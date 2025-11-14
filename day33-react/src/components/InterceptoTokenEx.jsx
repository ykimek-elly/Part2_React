import axios from "axios"
import { useNavigate } from "react-router-dom";


export default function InterceptoTokenEx() {


    const navigate = useNavigate();
    

    // 1. axios를 이용해서 기본 설정하기
    const instance = axios.create({
        baseURL : "https://dummyjson.com/",
        timeout : 5000, // 5초 넘게 안오면 에러로 처리한다
    })

    // 2. 중간에서 요청을 가로채서 토큰값을 자동으로 넣기
    instance.interceptors.request.use((config) =>{
        console.log("💥요청 인터셉터 작동!");
        console.log("➡서버 요청 나가기 직전! ");

        // 토큰이 있다고 가정을 하고 자동으로 헤더에 붙이는 코드
        const token = localStorage.getItem("token");

        //  저장이 안되어있거나 만료가 되어서 사용을 못한다거나 토큰을
        //  헤더에 추가할 필요가 없다!
        if(token){
            //헤더 객체가 없을 수도 있어서 방어하는 코드!
            if(!config.headers){
                //헤더가 없으면 빈 객체로 내보내기 
                config.headers = {};
            }

            //헤더 있다(택배 운송장!)
            config.headers.Authorization = `Bearer ${token}`;

        }
        console.log("요청 url:",config.url);
        console.log("요청 헤더:",config.headers);

        //  중간에서 가로 챘기 때문에 정상적으로 요청을 보내기 위해서는
        // 반드시 config(설정한) 내용을 return 해줘야된다.
        return config; // 서버로 요청 보내기!
    });


    // 응답 가로채기 하는 코드
    instance.interceptors.response.use(
        (res) => {
            console.log("💥응답 인터셉터 작동!");
            console.log("⬅서버에서 응답 도착! ");
            console.log(" 응답 상태:",res.status);
            console.log(" 원본 응답 데이터: ",res.data);

            // 응답 데이터가 있으면 가공하는 코드 
            // 만약 데이터가 없다면 원본 그대로 사용!
            const fixed = res.data.payload || res.data;

            // 다음처리를 위해서 return 반드시 해야된다.
            // 그때 가공된 데이터를 보내고 싶으면 fixed를 사용
            // 가공 된 데이터가 아니라 res객체로 보내고 싶으면! res
            return fixed;

        },
        (error) => {
            console.log("🔴 응답 에러 발생!", error);

            // 만약 로그인이 만료되었다면 데이터가 없다면 로그인
            // 페이지로 이동을 해라!
            // error.response 에러의 응답 객체가 왔다.
            if(error.response && error.response.status === 401){
                alert("로그인이 만료되었습니다. 다시 로그인 해주세요!");
                window.location.href = "/login";
            }

            return Promise.reject(error);

        }
    );


    // 버튼을 누르면 실제로 요청 봰기 
    async function requestClick(){
        try{
            const res = await instance.get("/users/1");
            console.log("실제 받은데이터: ",res.data);
        }catch(err){
            console.log("💥요청 실패!",err);
        }
    }


  return (
    <div>
        <h2>인터섭터를 이용한 자동 토큰 넣기</h2>

        <button onClick={requestClick}>자동 토큰 넣기</button>
    </div>
  )
}