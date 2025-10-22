import "./App.css"

import React from 'react'

export default function App() {
  return (
    <div className="body">
      
      <img id="main-img" src="https://mblogthumb-phinf.pstatic.net/MjAxNzA2MjVfMjU5/MDAxNDk4Mzg5NTg2OTky.yIdU5XJgX6wzwM8JDES4vT1Pyr0EzFhcbVvU-TLix1Mg.S-Nz7FIteIrxmp7VwNSdWifzYdzRyX3-69LmGKtCJqcg.PNG.lastmistake/%EB%9D%BC%EC%9D%B4%EC%96%B88.png?type=w800" alt="라이언이미지" />
      <h1>Hello</h1>
      <h1>I'm <span>Dream Coder</span>, Eryna</h1>
      <p>A software enginear currently residing in Sydney,Australla</p>

      <button>Contact Me </button>

    </div>
  )
}




// // css 파일을 포함해야된다.
// // 현재 내 파일을 기준으로 App.css파일을 포함하겠다.

// import "./App.css";

// function App() {
  
//   return (
//     <>
//     {/* div태그를 이용해서 팝업창 
//       html 에서 css 셀렉터  class="클래스명"
//       리액트는 css 셀럭터  className="클래스명"
//     */}
//     <div className="box">
//       팝업창
//     </div>

//     <div className="box2">
//       두번째 박스
//     </div>

//     </>
//   )
// }

// export default App

// /*
//   <h3>처음 만나는 리액트 프로젝트 구성</h3>
//       <ul>
//         <li>node_modules - 리액트에서 제공하는 라이브러리들의 모음</li>
//         <li>위에 node_modules는 반드시 생성되야된다.</li>
//         <li>핵심 폴더 - src </li>
//         <li> 안에 app.jsx 메인화면이다! (화면 구조 담당)</li>
//         <li> assets 폴더는 이미지,css,폰트등  </li>
//         <li>index.css - 전체 스타일 초기화용! </li>
//         <li>main.jsx - 프로젝트 시작점 </li>
//       </ul>

//       <ol>
//         <li>리액트 실행시 순서</li>
//         <li>cd my-react-app 안으로 이동 해야된다. 
//             이름이 길면 tab키를 누른다.</li>
//         <li>경로 변경된걸 확인 </li>
//         <li> 실행하는 명령어 - npm run dev</li>
        
//       </ol>

//       <div>
//         <h3>Hello world</h3>
//       </div>

// */