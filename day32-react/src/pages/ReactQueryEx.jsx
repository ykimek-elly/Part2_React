import { useQuery } from "@tanstack/react-query"
import ErrorPage from "./ErrorPage";
import axios from "axios";

export default function ReactQueryEx() {
    //useQuery()
    // 데이터를 서버에서 가져와서 화면에 쓸 수 있게 도와주는 
    // 함수(훅!)
    // - 한 곳에서 다 관리한다!
    // isLoading  true  isError false 
    // data undefined  아직 응답 받지 못한 상태

    // useState x, useEffect x 
    // 상태값 변경하는 코드도 작성 안해도 되요!

  const { data , isLoading ,isError}  =  useQuery({
    
    // 캐시 이름 (별명)
    // 이 데이터를 나중에 다시 쓸 때 부를 이름!
    queryKey : ["users"],

    // 실제로 데이터를 가져오는 함수
    queryFn : () => axios
                    .get("https://dummyjson.com/users?limit=5")
                    .then((res) => res.data.users)
  });

  /*
  화면 실행됨
    ↓
    useQuery 실행됨
    ↓
    isLoading = true → "로딩 중..." 표시
    ↓
    axios로 서버 데이터 요청
    ↓
    성공하면 data에 저장 → 화면 자동 업데이트
    (에러면 isError = true)

  */
  console.log("로딩:",isLoading);
  console.log("에러:",isError);
  console.log("데이터:",data);
  



  
  // 로딩상태를 처리하는 문법!
  if(isLoading) return <p>데이터를 가져오는 중...</p>

  // 통신을 하다가 에러를 처리하는 문법!
  if (isError) return <ErrorPage props="어떤에러?"/>

  
  return (
    <div>
        <h3>React Query로 상태관리!</h3>
        <p>실무에서 많이 사용하는 라이브러리!</p>

        <ul>
            {
                // () => ()
                //  ul 안에서 map이 반복하면서 li 태그에
                //  내가 가져온 내용을 채워서 화면에 보인다.
                data.map((one) =>(
                    <li>{one.username}</li>
                ))
            }
        </ul>
    </div>
  )
}