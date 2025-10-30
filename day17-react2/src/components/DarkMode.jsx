// DarkMode.jsx

import React, { useState } from 'react'

export default function DarkMode() {

    // boolean 타입으로 다크모드 true / false 라이트모드
    let [isDark, setIsDark] = useState(true);

    //버튼을 클릭하면 실행할 수 있도록 onClick함수이름만
    // 작성한다.
    function toggleTheme(){
        setIsDark(!isDark);
    }
  return (
    <div>
         <h2>{isDark ? "🌙 다크 모드" : "☀️ 라이트 모드"}</h2>
         <button onClick={toggleTheme}
         
                style={
                    {background : isDark ? 
                                    "#2d3748" :
                                    "#e2e8f0"}
                }
         
         >모드</button>
    </div>
  )
}