// UseStateEx2.jsx

import { useState } from "react"

// 리액트는 원본 파일이 하나 있고 복제본 파일을 만든다.
// 원본화면을 직접 건드리게되면 새로고침이 일어나고 값이 리셋된다.
// 복제본화면을 만들었다. (가상 DOM)
// 변수를 이용해서 값을 저장하면 원본에 변경된 값이 올라가야되는데
// 복제본에 올라간다. 그래서 원본이 변경된 값을 모른다.
// useState() -> 복제본에 있던 변경된 값을 원본으로 보내준다.


// 리액트가 동작하는 방법
// 화면을 빠르게 바꾸기 위해서 복제본화면(가상 DOM)에서 먼저
//  수정이 된뒤 바뀐 부분만 원본화면에서 수정한다.

// 우리가 가지고 있는 변수들은 값이 바뀌면 복제본 화면에만 
// 수정이된다. 원본 화면은 모른다.
// useState() 부탁 복제본에 수정된 변수 값들이 있다.
// 원본화면도 변경된 값들을 수정해라~ 

// useState() 복제본에 있던 변경된 값을 React(원본)
// 화면에 알려주는 연결다리 같은 역할이다!

export default function UseStateEx2() {
    // 리액트에서 값들이 변경될 때 useState() 필수로 사용한다.
    // let num = 0;
    // 값을 수정할 때는 num = 100; === setNum(100 +1)

    let [num,setNum] = useState(0);

    function btnClick(){
        setNum(num+1);
        console.log(num);
    }
    
  return (
    <div>
        {/* 버튼 클릭할때만 setNum()실행 */}
        <button onClick={btnClick}>
             숫자를 100으로 바꿔라</button>
        
    </div>
  )
}