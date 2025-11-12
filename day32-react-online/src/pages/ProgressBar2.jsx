
import React, { useEffect, useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
// 프로그레스바를 사용하기 위한 기본 디자인 파일을 다운받기
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar2() {


     const [value , setValue]= useState(0);

    //  0부터 70까지 부드럽게 증가하는 프로그레스바 생성!
    useEffect(() => {

        const timer = setInterval(()=>{

            setValue((prev) =>{
                if(prev >= 70){
                    return 70;
                } 
                return prev +1;
            })
        },20);  // 0.02초에 한번씩 1씩 증가한다 

        // clearInterval() 
        // 반복적인 setInterval()함수를 종료하기 위해서 사용한다.
        // 종료를 하면 함수의 유일한 id값을 알아야되기때문에 변수에
        // 담아서 사용한다. 
        return () => clearInterval(timer);


    },[]);
     
  return (
    <div>
        <h3>애니메이션 프로그레스바!</h3>
        <div style={{width : 300 ,
                     height : 300
                     ,margin : "50px auto"}}>
            <CircularProgressbar value={value} 
                                 text={`${value}%`}
                                 styles={ buildStyles({
                                    pathColor : "#93c5fd",
                                    trailColor : "#e2e8f0",
                                    textColor :  "#1e3a8a"
                                    
                                 })}
                                 
                                 />
        </div>
    </div>
  )
}
/*
컴포넌트 실행 (ProgressAnimated)
       │
       ▼
───────────────────────────────
1️⃣ useState(0)
    └─ value = 0  (시작값 설정)
───────────────────────────────
       │
       ▼
2️⃣ useEffect() 실행
    └─ setInterval(20ms마다)
       │
       ├─ value < 70 ? → true
       │      │
       │      ▼
       │  setValue(prev + 1)
       │      │
       │      ▼
       │  value 값 변경 (1 → 2 → 3 …)
       │
       └─ value >= 70 ? → true 시 정지
───────────────────────────────
       │
       ▼
3️⃣ CircularProgressbar 재렌더링
    └─ 변경된 value로 다시 그림
       (0% → 1% → 2% → … → 70%)
───────────────────────────────
       │
       ▼
4️⃣ pathTransitionDuration 작동
    └─ 부드러운 애니메이션 효과 적용
───────────────────────────────
       │
       ▼
5️⃣ 목표값(70%) 도달 → setInterval 중단
    └─ clearInterval(timer)
───────────────────────────────


*/