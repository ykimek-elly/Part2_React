import './App.css';
import Person from './components/Person';
import Product from './components/Product';

function App() {

  return (
    <>
      <h3>Props?</h3>
      <h4>매개변수 : 부모에서 자식으로 값을 전달할때 함수끼지 사용하는 (괄호안에 들어가는 변수들)</h4>
      <Product title="아메리카노"/>
      <Product title="카페라떼" price={3000}/>




      <h4>이름과 나이를 컴포넌트로 넘기기 (Props)</h4>
      {/* <Person name="이서희" age={20} gender={true}/>
      <Person name="이서희" age={20} /> */}

     <p>숫자나 계산된 값이나 true,false 타입들을 보낼때는</p>
     <p>{}이용한다.</p>
     <p>리액트는 정보를 담는 변수 타입 2개</p>
     <ul>
      <li>"" 따옴표 == string 문자</li>
      <li>{} 중괄호 == 계산되거나 바뀌는 값을 담는 타입</li>
      <li>중괄호 타입 - number,변수,함수등등..</li>
     </ul>

     
    </>
  )
}

export default App

/*
<p>리액트에서 컴포넌트는 작은 조각함수다!</p>
      <p>그런데 어떤 컴포넌트는 다른 컴포넌트에게 정보를 전달해야될떄가
        있어요! 그때 사용하는게 바로 props
      </p>
      <p>App(부모) Card(자식)에게 선물보내기!</p>

      {/* 각 게시글을 작성할 떄 Post컴포넌트를 이용해서 사용 
      
      <Post title="출석1등"
            userId="1"
            body="역시 1등이 좋아~"/>
      <Post title="출석2등"
            userId="2"
            body="역시 2등이 좋아~"/>


      {/*  개발자 3명의 정보를 Profile 태크를 이용해서
           정보를 출력하기   
      
      <Profile name="Eryna" 
               dept="풀스택 개발자"
               years="5년차"/>

      <Profile name="dex" 
               dept="프론트엔드 개발자"
               years="10년차"/>
      
      <Profile name="Alex"
               dept="CEO"
               years="20년차" />


      똑같은 태그를 기준으로 컴포넌트한테 제목을 각각 보내주기 
      <Card1 />
      <Card2 />
      <Card3 />

      <Card1 title ="계란빵"/>
      <Card1 title ="우동5종"/>
      <Card1 title ="국거리" />
 
*/