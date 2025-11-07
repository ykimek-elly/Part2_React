// 파일명: store.js
//  - 자바스크립트 코드들만 들어가면 js 파일로 사용가능하다.

import { create } from "zustand";

// 1. 공간 만들기
//    - 저장할 변수들만 만들어 놓으면 읽기모드
export const useStore  = create((set)=>({
    // 2. 저장할 변수들 
    count : 1000,
    readCount : 0,

    // 3. 기능! (수정하기 위해서)
    increment : () => set((state) =>({
        count : state.count +1
    }))

    decrement increment : () => set((state) =>({
        count : state.count +1
    }))
}));