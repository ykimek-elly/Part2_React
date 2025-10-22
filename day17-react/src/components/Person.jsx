

export default function Person({name,age,gender}) {
    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof gender);
  return (
    <div>
        <h3>이름:{name}</h3>
        <p>현재 나이: {age}</p>
        <p>내년 나이: {age+1}</p>
        <p>성별: {gender ? "여성" : "남성"}</p>
    </div>
  )
}
