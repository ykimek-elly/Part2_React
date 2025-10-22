// FruitList.jsx

export default function FruitList({items}) {
  return (
    <div>

        <h3>과일명: {items.name}</h3>
        {/* 선택해서 보여줄 때 (조건부 렌더링) 
        값이 있으면 보여주고 없으면 안 보여준다.*/}
        { items.price && <p>과일가격:{items.price}</p>}
    </div>
  )
}
/*
<div>
        <h3>{items}</h3>
        <p>사과: {items[0]}</p>
        <p>바나나: {items[1]}</p>
        <p>포도: {items[2]}</p>
    </div>
*/