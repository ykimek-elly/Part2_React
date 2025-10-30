// Coffee.jsx



export default function Coffee({name,price}) {
  return (
    <div>
        <h3>{name}</h3>
        {/* 가격이 있으면 3000원  없으면 "" 
         삼항 연산자에 price 만 값이 있으면  true
                                 없으면  false
            
        false는 0 이다! ,null ,undefined
        */}
        <p>{price ? `${price}원` : ""}</p>
    </div>
  )
}