

import { useJoinStore } from "../store/join.store";

export default function Dashboard() {
  // useJoinStore 파일에서 저장한 내용 가지고와서
  // 아래 출력하기!

  const { userList } = useJoinStore();
  return (
    <div>
      <h3>회원 가입 목록 출력 페이지!</h3>
      <p>현재 가입된 회원 수: {userList.length}명</p>
      <hr />

      {/* 회원이 없을  때 */}
      {userList.length === 0 && <p>아직 가입된 회원이 없습니다!</p>}

      {/* 회원이 있을 때 보여주는 태그! */}
      {userList.map((user, idx) => (
        <div key={idx} style={{
          border: "1px solid #ddd",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "8px"
        }}>
          <p><b>아이디:</b> {user.id}</p>
          <p><b>이름:</b> {user.name}</p>
          <p><b>성별:</b> {user.gender}</p>
          <p><b>통신사:</b> {user.mobile}</p>
          <p><b>생년월일:</b> {user.birth}</p>
        </div>
      ))}
    </div>
  );
}