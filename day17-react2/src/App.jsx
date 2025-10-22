import './App.css'
import FruitList from './components/FruitList';
import MovieInfo from './Test/MovieInfo';
import Product from './Test/product';
import Test1 from './Test/Test1';


function App() {
  // 배열을 props로 넘기기
  // let fruits = ["🍎 사과",  //0
  //             "🍌 바나나",  //1
  //             "🍇 포도"];   //2

  // 객체는 여러 정보를 묶어서 한번에 보낼때
  // Object 
  
  // let fruitInfo ={
  //   name : "🍎",
  //   price: 2000
  // };

  // // 만약 값이 없으면 과일의 가겨을 안 띄우고 싶다!
  // let fruitInfo2 = {
  //   name : "🍌",
  //   color: "yellow"
  // }



  return (
    <>
      <Product name="아이스아메리카노" price="3000"/>
      <Book title="자바스크립트 첫걸음" author="김코딩" />
     
     <h2>🎥 영화 정보</h2>
      {/*  MovieInfo 컴포넌트 호출 */}
      <MovieInfo />





      {/* 객체 형태 */}
      {/* <FruitList items={fruitInfo}/>
      <FruitList items ={fruitInfo2} /> */}

      {/* 배열 형태
        <FruitList items={fruits}/> */}
    </>
  )
}

export default App