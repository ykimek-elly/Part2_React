import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

// 실제 버튼을 클릭했을 실제 값들을 변경하는 slice(미니서버)
// createSlice() - 자주 쓰이는 것들을 한번에 묶어주는 도우미!

const counterSlice = createSlice({
    name : "counter"  // 미니서버의 이름이 counter (key)
    , initialState : {
         value : 0   //슬라이스가 처음 저장한 값!
    },
    reducers : {
        // 증가
        increment : (state) => { state.value++},
        // 감소
        decrement : (state) => { state.value--}
    }
});

/*
    store = {
        counter : { //name : key 다! 
            value : 0
        }
    }
*/


// 1. 저장소 만들기 
//   저장소는 한개! reducer 여러개가 나올 수있다.
//   버튼을 클릭했을 때 증가하고 감소하는 저장소를 만들어서
//   처리하기! 
export const store = configureStore({
    reducer : {
        // user : useReducer,
        counter : counterSlice.reducer
        
    }
});

export const {increment , decrement} = counterSlice.actions;


/*
// 1. 저장소 만들기 
//   저장소는 한개! reducer 여러개가 나올 수있다.
export const store = configureStore({
    reducer : {
        user : useReducer,
        cart : cartReducer,
        theme : themeReducer
    }
});

*/