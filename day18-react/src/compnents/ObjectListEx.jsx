// ObjectListEx.jsx

export default function ObjectListEx() {


    // 자바스크립트 객체 (Object)
    // key:value 저장하는 타입
    // 공간의 순서를 숫자로 저장하느냐
    //      문자로 공간의 이름을 저장하느냐

    // 객체 타입과 배열타입의 공통점 
    //  - 여러개의 데이터를(값) 한꺼번에 묶어서 저장한다!
    
    // 객체 타입과 배열타입의 차이점
    //  - 값을 꺼낼떄 방식이 다르다!
    //  - 배열은 순서(공간의 번호)가 있는 데이터 모음
    //    순서대로 값을 꺼낼 수있다. 반복문을 많이 사용한다.(for,map)
    //  - 0,1,2 숫자로 꺼내기

    //  - 객체는 이름(key),값(value) 이루어져 있다.
    //    순서가 없다! 순서보다 이름이 중요할 때 사용
    //  - 복잡한 정보(여러개를 쉽게) 표현하는 타입!

    //  개발자 정보를 저장하는 타입 객체 사용
    let user = {
        name : "홍길동",
        age : 25,
        job : "프론트엔드 개발자"
    };

    let student ={
        name : "이서희",
        address : "동탄",
        phone : "010-123-4567"
    }
    
    // 상품 정보를 저장하는 객체
    // name : " 누니 블루라이트 차단 안경"

    let glass = {
        name : "",
        price : "",
        color : "",
        brand : ""
  return (
    <div>
        <h3>제품정보</h3>
        <p>제품명:{}</p>
        <p>가격:{}</p>
        <p>컬러:{}</p>
        <p>브랜드:{}</p>


        <br /><br />
        <h3>사용자 정보🍳</h3>
        <p>이름: {student.name}</p>
        <p>주소: {student.address}</p>
        <p>전화: {student.phone}</p>

        <br /><br />
        <h3>사용자 정보🍳</h3>
        <p>이름: {user.name}</p>
        <p>나이: {user.age}</p>
        <p>직업: {user.job}</p>
    </div>
  )
}