import { useEffect, useState } from "react"
import styles from "../css/ThemeStorage.module.css";

export default function ThemeStorage() {

    //4. useState()생성한다.
    let [theme,setTheme] = useState("light");

    // 1. 페이지를 처음 열릴 때 localStorage에서 읽기
    useEffect(()=>{
        // 2. getItem(key) 작성
        let saved = localStorage.getItem("theme");
        // 3. 읽어온 값을 화면에 보여줘야된다.
        //    - 만약 데이터가 없다면~어떻게 처리할꺼냐!
        //      만야게 데이터가 없다면 저장 안함!
        if(saved){
            setTheme(saved);
        }               
               
    },[]);

    // 2.테마 바꾸면 localStorage저장까지 해야된다.
    useEffect(()=>{
        // 테마의 값을 수정해야된다.(업데이트!)
        localStorage.setItem("theme",theme);
    },[theme]);



    // 버튼을 클릭할 때 마다 실행하는 함수 
    function toggleTheme(){
        setTheme(theme === "light" ? 
                            "dark" : 
                            "light");
        console.log(theme);
    }


  return (
    <div className={theme === "light"? styles.light : styles.dark}>
        <h2>{theme === "light" ? 
                "🌞 라이트 모드" : 
                "🌙 다크 모드"}</h2>
        <button onClick={toggleTheme}>테마바꾸기</button>
    </div>
  )
}