

export default function Profile({name,dept,years}) {
  return (
    <div>
        <h3>개발자 이름 : {name}</h3>
        <p>부서 : {dept}</p>
        <p>입사 : {years}</p>
    </div>
  )
}
