// 유저들에 관한 상태, 정보, 로그인, 로그아웃, 회원정보 수정
// 만 처리하는 파일 

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        name : "",
        age : 0
    },

    reducers : {
        setName :(state , action) =>{
            state.name = action.payload;
        },
        setAge : (state, action) =>{
            state.age = action.payload;
        }
    }
});

export const { setAge , setName} = userSlice.actions;
export default userSlice.reducer;