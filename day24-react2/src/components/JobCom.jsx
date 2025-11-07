import React from 'react'
import Dept from './Dept';

export default function JobCom({job}) {
    const dpet = "개발1팀";
  return (
    <div>
        <h4>직업: {job}</h4>
        <Dept dept={dept}/>
    </div>
  )
}
