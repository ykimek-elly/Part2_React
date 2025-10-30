// CheckBoxEx.jsx

import { useState } from "react";

export default function CheckBoxEx() {
    // 리액트에서 변수만든다.
    // 기본적으로 체크가 되어있지 않은 상태
    let [checked, setChecked] = useState(false);

    function checkBtn(){
        setChecked(!checked);
    }
  return (
    <div>
        {/* 체크박스 상태를 저장 변수 */}
        <h3>체크박스 예제</h3>
        <label>
          {/* input태그들을 설명하는 label 이름표(lable을 사용하면 체크박스와 텍스트를 하나로 묶어서 선택될수 있도록 한다) */}
          <input type="checkbox" onChange={checkBtn}/> 동의합니다.
        </label>  
        <p>현재 상태: {checked ? "선택됨 ✅" : "선택 해제 ❌"}</p>
    </div>
  )
}