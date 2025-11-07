import { useEffect, useState } from 'react';
import { useStore } from '../store'

export default function Home() {

    let { count ,increment } = useStore();
    console.log(count);



  return (
    <div>
        <h3>Zustand란?</h3>
        <p>여러 컴포넌트들이 하나의 공간을 공유한다.(저장소)</p>
        <p>useState - 컴포넌트 안에서만 값을 바꾼다.</p>

        <h4>count : {count}</h4>

        <button onClick={increment}>증가 1씩</button>
        <button>감소 1씩</button>

    </div>
  )
}
