
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function FirebaseTest() {


  const saveUser = () =>{
    // 1. 데이터베이스로 보내기 위한 정보! 
    //    임의적으로 설정함!
    const userId = "eryna";
    const userPw = "eryna11!";

    // 2. 파이어베이스로 전송! 위에 정보를 저장해줘!
    //    요청을 보내기 
    //  doc() : 컬렉션(폴더생성 ) 파일을 저장하겠다.
    //    디비정보랑 폴더명이랑 파일명이 없으면 새로 만든다.
    //  setDoc(문서위치,{데이터})
       setDoc(doc(db,"users","list"),{
         userId : userId,
         userPw : userPw,
         date :  new Date()
       });
       console.log("결과는 어떻게 됬을까?");

  };

  const getUser = async ()=>{
    //  데이터를 가져오기 위해서는 저장소인 firebase를
    //  읽어온다. 
    // 1. 문서 위치 
    const lo = doc(db, "users","list");

    // 2. 정보 가져오기 
    const userInfo = await getDoc(lo);
    // 3. 확인 
    console.log(userInfo.data());
  }


  return (
    <div>
        <h2> 파이어베이스 추가(정보 추가)</h2>
        <button onClick={saveUser}>데이터 저장하기</button>

        <br /><br /><br />

        <h2>파이어베이스 정보 (가져오기)</h2>
        <h4>아이디:{userId.userId} </h4>
        <button onClick={getUser}>데이터 가져오기</button>
    </div>
  )
}

/*
┌────────────────────────┐
│   React 페이지 렌더링   │
└─────────────┬──────────┘
              │
              ▼
┌────────────────────────┐
│  사용자가 버튼 클릭함   │
└─────────────┬──────────┘
              │
              ▼
┌────────────────────────┐
│   saveUser() 함수 실행  │
└─────────────┬──────────┘
              │
              ▼
┌───────────────────────────────┐
│ userId / userPw 변수 생성     │
│  userId = "eryna"             │
│  userPw = "eryna11!"          │
└─────────────┬─────────────────┘
              │
              ▼
┌───────────────────────────────┐
│ doc(db, "users", userId) 호출 │
│ → Firestore 문서 위치 생성    │
│   users/eryna                 │
└─────────────┬─────────────────┘
              │
              ▼
┌──────────────────────────────────────────┐
│ setDoc(문서위치, { userId, userPw })     │
│ → Firestore에 "데이터 저장 요청" 전송     │
└────────────────┬─────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────┐
│      Firestore 서버에서 실제로 저장      │
│   users 컬렉션 > eryna 문서 생성/업데이트 │
└────────────────┬─────────────────────────┘
                 │
                 ▼
┌────────────────────────┐
│  await setDoc 완료됨   │
└─────────────┬──────────┘
              │
              ▼
┌──────────────────────────┐
│ alert("저장 완료!") 실행 │
└──────────────────────────┘

*/