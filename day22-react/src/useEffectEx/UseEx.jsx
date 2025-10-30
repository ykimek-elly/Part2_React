// 폴더명: useEffectEx
// 파일명: UseEx.jsx

import { useState } from "react"


export default function UseEx() {

    // useState(값)
    // 값이 변경될때마다 현재 useState()들어있는 컴포넌트
    // 전체가 다시 실행한다.

    // - react컴포넌트 안에서 "변하는 값(상태)"을
    //    관리하는 도구!
    // - react화면을 자동으로 다시 그려주는데 그 기준
    //   바로 state(상태)

    // let [값,값을변경하는함수] = useState(초기값);

    let [num, setNum] = useState(1000);
    console.log("🌀 컴포넌트 렌더링됨!");
  return (
    <div>
        <h3>useState의 실행 순서 설명</h3>
        <p>{num}</p>
        <p>값이 바뀔 때 마다 UseEx 전체가 다시 실행된다.</p>

        <h4>실행 순서</h4>
        <ol>
            <li>처음 렌더링(App2 - UseEx) 보여준다. </li>
            <li>useState값을 변경하면 다시 렌더링한다.</li>
            <li>화면에 변경된 값이 보인다.</li>
            <li>useState 값이 바뀔때마다 계속 실행한다.</li>
            <li>100번이면 100번 화면을 다시 그린다.</li>
        </ol>


    </div>

  )
}