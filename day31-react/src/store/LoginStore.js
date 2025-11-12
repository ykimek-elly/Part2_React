// LoginStore.js

import { create } from "zustand";

// LoginPage에서 입력한 값들을 LoginStore 안으로 가지고
// 온다. 

// 한명의 유저의 정보를 이용해서 login logout을 구현 중
export const useLoginStore = create((set)=>({
    // 값 (변수)
    user : null, //로그인을 하면 여기에 저장됨

    // 업데이트 (함수)
    //  - 유저의 로그인 정보를 저장하는 함수다!
    login : (userInfo) => set({user : userInfo}),

    //  - 로그 아웃 하는 함수다!
    logout : () => set({user : null})
}));