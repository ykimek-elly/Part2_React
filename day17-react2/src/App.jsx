import './App.css'
import FruitList from './components/FruitList';
import UseStateEx2 from './useStateTest/UseStateEx2';
import UseStateTest1 from './useStateTest/UseStateTest1';
import Test1 from './Test/Test1';
import LikeButton from './components/LikeButton';
import NameChange from './components/NameChange';
import DarkMode from './components/DarkMode';


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
      {/* <UseStateTest1 /> 
      <UseStateEx2 /> */}
      <LikeButton />
      <NameChange />
      <DarkMode />




      
      {/* <Test1 /> */}
      {/* <FruitList items={fruitInfo}/>
      <FruitList items ={fruitInfo2} /> */}

      {/* 배열 형태
        <FruitList items={fruits}/> */}
    </>
  )
}

export default App