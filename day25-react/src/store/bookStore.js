// 폴더명: store
// 파일명: bookStore.js

import { create } from "zustand";

// 1. 저장소만 만들기
//   - 책 관련 상태를 어디서든지 꺼내 쓸 수있는 공간
//   - set은 상태를 바꾸는 함수 useState 같은 개념
//     setState 
export const useBookStore = create((set)=>({
    // 2. 저장할 변수들
    books : [],    // 전체 도서 목록
    recent : [],   //최근 본 목록
    // 3. 위에 변수들을 수정하거나 삭제할 때 필요한 함수

    setBooks : (books) => set({books}),
}));