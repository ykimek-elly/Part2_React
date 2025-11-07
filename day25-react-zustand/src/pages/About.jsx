
import { useStore } from '../store'

export default function About() {

    
    let { count ,increment } = useStore();
    
  return (
    <div>
        <h3>About에서 전체적으로 공유하는 저장소 값 꺼내기</h3>

        <p>count : {count}</p>

        <button onClick={increment}>증가 1씩</button>
        <button>감소 1씩</button>

    </div>
  )
}