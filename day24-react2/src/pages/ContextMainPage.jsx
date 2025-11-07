import Dept from '../components/Dept'
import Test1 from '../components/Test1'
import UserName from '../components/UserName'
import { MyContext } from '../MyContext'

export default function ContextMainPage() {


  // let [userName,setUserName]= useState("Seohee");

  return (
      //  Provider : 데이터를 실제로 전달해주는 역할 
      <div>
        <h2>ContextMain페이지에서 데이터 전달할께</h2>
        <Test1 />
        <UserName />
        <Dept />
      </div>
    
  )
}