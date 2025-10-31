import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

export default function Tabs() {

    let [pushTab,setPushTab] = useState(0);

  return (
    <div className='container mt-5'>
        <h2>🎬 React-Bootstrap 탭 예제</h2>

        {/* 탭 메뉴 
           디자인을 적용하기 위한 설정 이다. variant='tabs'
           defaultActiveKey="link-0"
            처음엔 첫번째 탭을 보여줘! 기본설정!
        */}
        <Nav variant='tabs'
             className='mt-5'
             defaultActiveKey="link-0"
             onSelect={(eventKey)=>{
                console.log(eventKey.split("-"));
                setPushTab(Number(eventKey.split("-")[1]));
             }}
             >
            <Nav.Item>
                <Nav.Link eventKey="link-0">0번째 제목</Nav.Link>
            </Nav.Item>  {/* 탭 하나 */}
            <Nav.Item>
                 <Nav.Link eventKey="link-1">1번째 제목</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                 <Nav.Link eventKey="link-2">2번째 제목</Nav.Link>
            </Nav.Item>
        </Nav>
        {/* 탭 내용  
        부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달 link-0,link-1*/}
        <div className='mt-4 p-3 border rounded bg-light'>
             <TabContent pushTab = {pushTab}/>
        </div>

    </div>
  )
}
//  Tab을 누를 떄 마다 보여질 태그를 작성하기
//  tab0번을 누르면 어떤 화면 태그 작성해라!
function TabContent({pushTab}){

    // if(pushTab === "link-0"){
    //     return <div>🍿 0번째 내용 — 영화 목록</div>
    // }else if(pushTab === "link-1"){
    //     return <div>🎥 1번째 내용 — 현재 상영작</div>;
    // }else if(pushTab === "link-2"){
    //     return <div>🎬 2번째 내용 — 개봉 예정작</div>;
    // }

    // 추가적으로 자바스크립트의 코드를 작성하면 깔끔하게
    // 한줄로 바꿀 수있다.
    // 리액트에서는 부모가 준 데이터를 변경할 수없다!

   
    const contents = {
        0 : "🍿 0번째 내용 — 영화 목록",
        1 : "🎥 1번째 내용 — 현재 상영작",
        2 : "🎬 2번째 내용 — 개봉 예정작"
    }
    return <div>{contents[pushTab]}</div>



}