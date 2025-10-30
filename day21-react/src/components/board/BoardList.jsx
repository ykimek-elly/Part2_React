import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Board from './Board';
import { Search } from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';

import "./Board.css";
import { useState } from 'react';

//  내가 만든 HTML태그 --> 컴포넌트!
export default function BoardList() {

    // 게시글 내용!
    const posts = [
        { id: 1, title: "첫 번째 게시글", content: "안녕하세요 👋 오늘부터 리액트 시작!" },
        { id: 2, title: "두 번째 게시글", content: "리액트 컴포넌트 개념이 이제 좀 이해돼요 😎" },
        { id: 3, title: "세 번째 게시글", content: "동적 파라미터를 연습 중입니다 🔢" },
        { id: 4, title: "네 번째 게시글", content: "props로 데이터 넘기는 연습 완료 ✅" },
        { id: 5, title: "다섯 번째 게시글", content: "state로 값 바꾸는 게 신기하네요 🔁" },
        { id: 6, title: "여섯 번째 게시글", content: "useEffect 너무 자주 헷갈려요 😅" },
        { id: 7, title: "일곱 번째 게시글", content: "부모-자식 컴포넌트 관계 정리 중 👨‍👧" },
        { id: 8, title: "여덟 번째 게시글", content: "리액트 부트스트랩 버튼 예쁘다 💅" },
        { id: 9, title: "아홉 번째 게시글", content: "모듈 CSS 덕분에 클래스 안 겹쳐서 좋아요 🎨" },
        { id: 10, title: "열 번째 게시글", content: "useNavigate로 페이지 이동 구현 완료 🚀" },
        { id: 11, title: "열한 번째 게시글", content: "Link 컴포넌트로 이동해보기 🔗" },
        { id: 12, title: "열두 번째 게시글", content: "게시판 상세 페이지 만들기 연습 중 📄" },
        { id: 13, title: "열세 번째 게시글", content: "동적 라우팅 구조가 익숙해졌어요 🧠" },
        { id: 14, title: "열네 번째 게시글", content: "Bootstrap Table 커스터마이징 완료 🪄" },
        { id: 15, title: "열다섯 번째 게시글", content: "리액트 아이콘 쓰는 법 배웠어요 🔍" },
        { id: 16, title: "열여섯 번째 게시글", content: "모달 컴포넌트 직접 만들어봤어요 💬" },
        { id: 17, title: "열일곱 번째 게시글", content: "JSON 데이터로 목록 렌더링 성공 🎉" },
        { id: 18, title: "열여덟 번째 게시글", content: "useParams로 게시글 번호 가져오기 연습 중 🔢" },
        { id: 19, title: "열아홉 번째 게시글", content: "리액트에서 map() 이해 완료 🔁" },
        { id: 20, title: "스무 번째 게시글", content: "이제 게시판 완성 직전이에요 ✨" },
        { id: 21, title: "첫 번째 게시글", content: "안녕하세요 👋 다시 한 번 연습 중이에요!" },
        { id: 22, title: "두 번째 게시글", content: "리액트 재밌어요! 정말요 😆" },
        { id: 23, title: "세 번째 게시글", content: "동적 파라미터 아직도 헷갈려요 😵" },
        { id: 24, title: "리액트 부트스트랩 연습", content: "Table, Button, Modal 실습 중입니다 🧱" },
        { id: 25, title: "state 연습", content: "버튼 클릭하면 숫자 증가하도록 만들었어요 🔢" },
        { id: 26, title: "props 복습", content: "부모 → 자식 데이터 전달 연습 중입니다 💌" },
        { id: 27, title: "useEffect 복습", content: "렌더링 타이밍 이해가 조금씩 돼요 🔁" },
        { id: 28, title: "라우터 연습", content: "useNavigate와 useParams 동시 사용 연습 중" },
        { id: 29, title: "Link 테스트", content: "링크 클릭 시 상세 페이지 잘 넘어갑니다 🔗" },
        { id: 30, title: "Table 꾸미기", content: "Bootstrap Table 색상 변경 시도 🎨" },
        { id: 31, title: "첫 번째 게시글", content: "이번엔 내용이 약간 달라요 😄" },
        { id: 32, title: "동적 파라미터 연습", content: "게시글 번호에 따라 화면이 달라져요 🔢" },
        { id: 33, title: "리액트 부트스트랩 연습", content: "Modal 디자인 조금 수정했어요 🪄" },
        { id: 34, title: "리액트 모듈 CSS", content: "className 충돌 없이 스타일 적용 완료 ✅" },
        { id: 35, title: "리액트 아이콘 사용법", content: "Bootstrap 아이콘으로 돋보기 추가 🔍" },
        { id: 36, title: "모달창 구현", content: "열기/닫기 기능 완성 💬" },
        { id: 37, title: "props 복습", content: "children 속성 실습 중이에요 📦" },
        { id: 38, title: "게시판 정렬 기능", content: "날짜순, 번호순 정렬 추가 예정 🗂️" },
        { id: 39, title: "리액트 공부 기록", content: "하루 한 시간씩 꾸준히 연습 중 ✏️" },
        { id: 40, title: "마지막 게시글", content: "40개 완성! 수고하셨습니다 🎉" },
    ];

     //리액트는 태그를 일일이 찾을 필요가 없다!
    // 값을 실시간으로 저장해주는 공간이 있다.
    // useState()는 컴포넌트 내부에 저장되는게 아니라 리액트
    // 내부 메모리 공간에 저장된다.
    let [radioValue,setRadioValue] = useState("");
    let [inputValue,setInputValue] = useState("");


    // 라디오버튼의 값이 변경되면 실행하는 함수 
    // 자동으로 이벤트가 실행되면 event 매개변수(파라미터) 이벤트
    // 에 관련된 정보들 변수 온다.
      function radioClick(event){
        console.log(event.target.value);
        setRadioValue(event.target.value);
    }

    function inputEnter(event){

        let isEnterKey = event.key == "Enter" ? 
                        true :
                        false;

        if(isEnterKey){
            // console.log("키보드: " + event.key);
            // console.log("입력 값: " + event.target.value);

            //라디오 값을 가져오기 !
            if(radioValue === "제목"){
                console.log("라디오 제목 버튼 클릭");
            }else if(radioValue === "내용"){
                console.log("라디오 내용 버튼 클릭");
            }else if(radioValue === "제목 + 내용"){
                console.log("라디오 내용 버튼 클릭");
            }

        }       
    }


  return (
    // 전체 게시글을 볼 수있는 페이지!
    <div>
      
     <Form.Select
         className='select-box'
         aria-label="Default select example">
      <option>3개씩</option>
      <option value="1">5개씩</option>
      <option value="2">10개씩</option>
      <option value="3">20개씩</option>
     </Form.Select>   

      {/* 검색창  */}
      <div className='search-box'>
        <div className='search-category-radio-btn'>
            <label>
                <input type='radio'
                       name='searchType'
                       value="제목" 
                       onChange={radioClick}/>
                제목
            </label>
            <label>
                <input type='radio'
                       name='searchType'
                       value="내용"
                       onChange={radioClick} />
                내용
            </label>
            <label>
                <input type='radio'
                       name='searchType' 
                       value="제목 + 내용"
                       onChange={radioClick} />
                제목 + 내용
            </label>
        </div>


        <input type='text' 
               onKeyDown={inputEnter} />
        <Search />        
      </div>


     <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th></th>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            </tr>
        </thead>
        <tbody>
            {/* <Board post = {posts[0]}/>
            <Board post = {posts[1]}/>
            <Board post = {posts[2]}/>
            
            <Board 컴포넌트를 이용해서 40개의 게시글을 출력하세요            
            */}
            {
                posts.map((data)=>(
                    <Board post={data} />
                ))
            
            }
        </tbody>
      </Table>
    </div>
  )
}