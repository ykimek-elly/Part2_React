import { Bar } from "react-chartjs-2"

import { Chart as ChartJS,BarElement, CategoryScale, LinearScale } from "chart.js";

// Chart.js
// 라이브러리가 버전 v3 모듈식으로 필요한 곳에서 끼워쓰는 방식으로
// 변했다. 
ChartJS.register(BarElement, CategoryScale, LinearScale);


export default function ChartEx() {


  // 1. 그래프를 그릴때 데이터가 먼저 필요하다.
  const data = {
    labels : ["A","B","C"],
    datasets : [
        {
           label : "숫자 데이터",
           data : [3,7,5],
           backgroundColor: ["red","blue","green"]
        }
    ]
  }


  return (
    <div>
        <h3>그래프 그리는 라이브러리!</h3>
        {/* 2. 위에 데이터를 이용해서 그림을 그릴 태그 */}
        <div style={{
            width : 300 ,
            margin : "50px auto"}}>
                
            <Bar data = {data}/>
        </div>
    </div>
  )
}