import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

export default function NowShowing() {

  let [tab,setTab] = useState("박스오피스");
  return (
    <div className='container mt-5'>
        <h1>전체영화</h1>

        <Nav variant='tabs'
             className='mt-3'
             defaultActiveKey="박스오피스"
             onSelect={(eventKey)=>{
              console.log("현재 tab:" , eventKey);
              setTab(eventKey);
             }}>
          <Nav.Item>
            <Nav.Link eventKey="박스오피스">박스오피스</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="상영예정작">상영예정작</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="MEGA ONLY">MEGA ONLY</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="필름소사이어티">필름소사이어티</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="클래식소사이어티">클래식소사이어티</Nav.Link>
          </Nav.Item>

        </Nav>

        {/* 보여질 화면 tab을 눌렀을 때  */}
        <div className='mt-4 p-3 border rounded bg-light'>
          <TabShow tab={tab} />
        </div>

    </div>
  )
}

// tab내용을 보여주는 화면 만들기
function TabShow({tab}){
  if(tab === "박스오피스"){
    return <div>박스오피스</div>
  
  }else if(tab === "상영예정작"){
    return <div>상영예정작</div>
  
  }else if(tab === "MEGA ONLY"){
    return <div>MEGA ONLY</div>
  
  }else if(tab === "필름소사이어티"){
    return <div>필름소사이어티</div>
  
  }else if(tab === "클래식소사이어티"){
    return <div>클래식소사이어티</div>
  }

}