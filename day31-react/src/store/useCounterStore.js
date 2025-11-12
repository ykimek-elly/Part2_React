
// 로직(Logic)
//   - 어떤 일이 일어나는지 정해놓은 규칙(방법)
//   - 이값을 어떻게 바꿀지 정하는 규칙

import { create } from "zustand";

// 1. 공유하는 공간 만들기
//   값 + 업데이트 (값과 화면에 보이는 결과)
//   현재 상태( 현재 저장된 값) + 동작 action(상태를 바꾸는 규칙)
export const useCounterStore = create((set)=>({
    // 저장할 변수값
    count : 0,
}));