// 폴더명: pages
// 파일명: BoardAdd.jsx
//        BoardAdd.html 파일과 같은 내용이다!

export default function BoardAdd() {
  return (
    <div className="board-input-section">
        <h2>게시판</h2>
        <label>
            이름
            <input type="text" 
                   placeholder="글쓴이 입력"/>
        </label>
        <label>
            비밀번호
            <input type="password" 
                   placeholder="비밀번호 입력"/>
        </label>
        <label>
            제목
            <input type="text" 
                   placeholder="제목을 입력"/>
        </label>
        <label>
            내용
            <textarea placeholder="내용을 입력"></textarea>
        </label>

        <input type="file" />

        <button>작성</button>

    </div>
  )
}