import { create } from "zustand";

export const useJoinStore =  create((set) =>({
    // 값 (여러명 저장하는 배열)
    userList : [],  // 빈 대기 박스

    // 함수 새 회원을 추가할 때마다  userList에 추가하는 함수
    // state : 저장조 자체를 말한다.
    //         지금까지 저장된 리스트명단!
    addUser : (newUser)=>set((state) => ({
        userList : [...state.userList,newUser]
    }))
}));