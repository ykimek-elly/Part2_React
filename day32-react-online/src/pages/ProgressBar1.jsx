
import React, { useState } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
// 프로그레스바를 사용하기 위한 기본 디자인 파일을 다운받기
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar1() {

    const [value , setValue]= useState(0);
 
    // 버튼을 클릭할 때 마다 실행하는 함수
    function handleClick(){
        setValue(value + 10 > 100 ? 0 : value +10);
    }
  return (
    <div>
        <h3>프로그레스바!</h3>

        <h3>파스텔 색상 커스텀 마이징</h3>

        <div style={{width : 300 ,
                     height : 300,
                     margin : "50px auto"}}>
            <CircularProgressbar value={value} 
                                 text={`${value}%`}
                                 styles={ buildStyles({
                                    pathColor : "#93c5fd",
                                    trailColor : "#e2e8f0",
                                    textColor : "#1e3a8a"
                                 })}
                                 
                                 />
        </div>

        <button onClick={handleClick}>10씩 증가</button>



        <br /><br /><br />

        <h3>기본 프로그레스 바</h3>

        {/* 원형 프로그레스바 컴포넌트 */}
        <div style={{width : 300 ,
                     height : 300
                     ,margin : "50px auto"}}>
            <CircularProgressbar value={value} 
                                 text={`${value}%`}/>
        </div>

        <button onClick={handleClick}>10씩 증가</button>



        <br /><br /><br />

        <p>작업의 진행 상태를 시각적으로 표시하는 막대 컴포넌트</p>
        <p>데이터 로딩, 업로드, 다운로드 등 얼마나 진행이 됬는지 보여주는
            퍼센트(%) UI컴포넌트
        </p>
        <p>npm install react-circular-progressbar</p>
        <p>디자인 파일도 포함해야된다.</p>
    </div>
  )
}