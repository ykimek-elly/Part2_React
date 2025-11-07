import { useEffect, useState } from "react";

// Hook은 여러 컴포넌트에서 자꾸 똑같이 써야할 때 그걸 하나로
// 묶어서 나만의 훅을 만든다.(공통 코드 묶음)
// 스크롤 위치를 감지하는 코드를 작성 

export function useWindowWidth(){
    let [width,setWidth] = useState(window.innerWidth);

    useEffect(()=>{
        // 스크롤의 위치를 감지하는 코드!
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth);
        });
    },[]);

    return width;
}
