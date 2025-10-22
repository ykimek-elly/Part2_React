// MovieInfo.jsx
export default function MovieInfo() {
  // 1️⃣ movie 객체 생성
  let movie = {
    title: "인사이드 아웃 2",
    rating: 9.3
  };

  // 2️⃣ 구조분해
  let { title, rating } = movie;

  // 3️⃣ JSX에서 출력
  return (
    <div>
      <h3>🎬 영화명: {title}</h3>
      <p>⭐ 평점: {rating}점</p>
    </div>
  );
}
