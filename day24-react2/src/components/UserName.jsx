import React, { useContext } from 'react'
import JobCom from './JobCom';
import { MyContext } from '../MyContext';

export default function UserName({}) {
    const job = "풀스택 개발자";
    
   let {UserName} = useContext(MyContext);
  return (
    <div>
        <h4>이름: {UserName}</h4>
        <JobCom job={job}/>
    </div>
  )
}
