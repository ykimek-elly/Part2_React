//Product.jsx

// 디자인 파일 연결하기 
import "./Product.css";

export default function Product({ name, price}) {
    //만약 가격이 없다면 문의요망 표시되도록 작성하기
    // 스타일을 작성 
    // 문의요망시 디자인
    // - 글씨크기는 32px, 폰트 굵게, 빨간색글씨로 변경하기

    // 원래 가격이 나오면 디자인
    // - 글씨 크기는 굵게 ,글씨 원하는 색상 변경하기 
    let textClass = prince ? "price" : "no-price"

  return (
    <div>
        <h3>상품명: {name}</h3>
        {price ? <p className={textClass}>가격: {price}원</p> : 
                 <p className={textClass}>문의요망!!!</p>}
    </div>
  )
}