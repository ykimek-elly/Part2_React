// ArrayListEx.jsx
// 위에 새로운 태그를 직접 만들었으면 App 메인화면에 항상!
// 추가하기!

export default function ArrayListEx() {
    let fruits = ["🍎 사과", "🍌 바나나", "🍇 포도","🍌 바나나"];

    //배열에 과일을 하나 추가하고 싶다
    //배열명.push() : 배열의 맨 뒤에 새로운 값을 추가한다.

    fruits.push("🥝 키위");

    // fruits 배열의 길이를 확인 fruits.length
    
    // 배열안에서 특정 값 찾기 
    // 조건에 맞는 첫번쨰 값 하나만 찾아준다.find()
    // fruits.find(fruit => fruit.includes("바나나"));
    
    // 배열 안에서 공간의 번호를 알려준다.(배열 위치)
    //  값을 넣으면 공간의 번호를 알려주고 없으면 -1 준다.
    let indexResult = fruits.indexOf(1,"🍌 바나나");
    console.log(indexResult);
    // 그 값이 있는지 (true/false)알려준다.
    let result = fruits.includes("🍌 바나나");
    console.log(result);


  return (
    <div>
        <h4>배열의 길이: {fruits.length}</h4>
        <ul>
            <li>{fruits[0]}</li>
            <li>{fruits[1]}</li>
            <li>{fruits[2]}</li> 
            <li>{fruits[3]}</li>
        </ul>


        <br /><br /><br />
        <h3>리액트에서도 배열을 사용한다.</h3>
        <p>여러 개의 데이터를 한꺼번에 관리한다.</p>
        <p>기존 걸 복사하고 새 걸 더한다.</p>
    </div>
  )
}