// LikeButton.jsx

import { useState } from "react"

// 좋아요 버튼(ON/OFF)
// boolean 타입을 이용해서 상태 값을 반전시키는 기능 구현
export default function LikeButton() {

    let [liked , setLiked] = useState(false);

    function toggleLike(){
        //토글(toggle)
        // 현재 true이면 false로 바꾸고 
        //     false이면 true로 바꾼다.
        // ! (not 연산자)
        setLiked(!liked);
    }


  return (
    <div>
        <h3>좋아요 상태: {liked ?  "❤️ ON" : "🤍 OFF"}</h3>
        <button onClick={toggleLike}>좋아요</button>
    </div>
  )
}