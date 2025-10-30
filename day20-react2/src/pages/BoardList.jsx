// 폴더명: pages
// 파일명: BoardList.jsx


export default function BoardList() {

  const posts = [
    { id: 16, title: "신상품 기대합니다!", author: "PLIPOP", date: "2021-01-26" },
    { id: 15, title: "무통장입금 가능한가요?", author: "PLIPOP", date: "2021-01-26" },
    { id: 14, title: "신상품 언제 되요? ㅠㅠㅠㅠ", author: "PLIPOP", date: "2021-01-26" },
    { id: 13, title: "친절한 응대 감사합니다 ^^", author: "PLIPOP", date: "2021-01-26" },
    { id: 12, title: "프로모션으로 상품을 구매했는데요.", author: "PLIPOP", date: "2021-01-26" },
    { id: 11, title: "배송 언제 되나요?", author: "PLIPOP", date: "2021-01-26" },
    { id: 10, title: "세상품 입고 언제 되나요?", author: "PLIPOP", date: "2021-01-26" },
  ];


  
  return (
    <div className="board-list-section">
        {/* 여기에 html 구조와 css 디자인 해주세요! */}
        <h1>Notice</h1>
        <div className="board-list-menu">
            <ul>
                <li>NOTICE</li>
                <li>{"Q&A"}</li>
                <li>1:1문의</li>
            </ul>
        </div>

        <div className="board-list-content">
            <table>
                <tr>
                    <th>NO</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>작성시간</th>
                </tr>
                {/* 요 부분에다가 tr을 생성해서 각각의
                내용을 들어가게 만들기  */}

                {
                    // 자바스크립트를 이용해서 태그 만들기
                    // map은 자동 반복하는 기능이다!
                    // 배열명.map((데이터 한 줄을 가져온다.변수명)=>(새로 태그 만들기))
                    posts.map((data)=>(
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.title}</td>
                            <td>{data.author}</td>
                            <td>{data.date}</td>
                        </tr>
                    ))
                }


            </table>

            <div className="board-list-bottom">
                <input type="text"
                       placeholder="Search"/>
                
                <button>글쓰기</button>

            </div>
        </div>


    </div>
  )
}

/*
// 폴더명: pages
// 파일명: BoardList.jsx


export default function BoardList() {
  
  return (
    <div className="board-list-section">
        {/* 여기에 html 구조와 css 디자인 해주세요! 
        <h1>Notice</h1>
        <div className="board-list-menu">
            <ul>
                <li>NOTICE</li>
                <li>{"Q&A"}</li>
                <li>1:1문의</li>
            </ul>
        </div>

        <div className="board-list-content">
            <table>
                <tr>
                    <th>NO</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>작성시간</th>
                </tr>
                <tr>    
                    내용을 작성하기! 
                    <td>15</td>
                    <td>무통장 입금 가능한가요?</td>
                    <td>user1</td>
                    <td>2025-10-25</td>
                </tr>
                <tr>    
                    {/* 내용을 작성하기!
                    <td>14</td>
                    <td>무통장 입금 가능한가요?</td>
                    <td>user1</td>
                    <td>2025-10-25</td>
                </tr>
            </table>

            <div className="board-list-bottom">
                <input type="text"
                       placeholder="Search"/>
                
                <button>글쓰기</button>

            </div>
        </div>


    </div>
  )
}

*/

