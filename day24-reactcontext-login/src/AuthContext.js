import { createContext } from "react";

//1. 저장소 만들기
const AuthContext = createContext({

    //2.값을 설정
    user : {
        id:"qwer",
        pass: "qwer11!",
    }
});

// 3.위에 내용을 어떤 컴퍼넌트들이든 가져다 쓸수 이도록 내보내기
// export
// 4. 전체적용가능하도록 main.jsx 설정하기!
