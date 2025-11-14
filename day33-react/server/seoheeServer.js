// seoheeServer.js

// 1. 라이브러리 가져오기!(도구 포함하기)
const express = require("express");
const cors = require("cors");
const axios = require("axios");

// 2. 서버 만들기
const app = express();

// 3. 모든 포트 허용하기
app.use(cors());

// 4.리액트가 서버에게 부탁하는 url주소 만들기
// react에서 오는 요청은 req 담고,
// react에 응답은 res 담고!
app.get("/shop", async (req,res)=>{

   const result = await axios
    .get("https://openapi.naver.com/v1/search/shop.json?query=무선이어폰",{
        headers : {
                "X-Naver-Client-Id" :  "GFSzBJE0dtaGUYZYSPJD",
                "X-Naver-Client-Secret" : "6QeG9Nxgj8"
        }
    });
    console.log(result.data);
    //res.send("데이터 오니: ",result.data);
    res.json(result.data);
});

// 5. 서버 실행 
app.listen(4500,()=>{
    console.log("내가 만든 서버 동작중...!http://localhost:4500");
});

// 6. 터미널에 서버 시작 명령문
//    node seoheeServer.js