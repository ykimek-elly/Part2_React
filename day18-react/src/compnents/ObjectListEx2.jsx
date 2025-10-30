// ObjectListEx2.jsx

export default function ObjectListEx2() {

    let teacher = {
        name : "이서희",
        job : "풀스택 개발자",
        subject : ["HTML","CSS","Js","React"]
    }

    let student = {
        name:"김민준",
        grade :3 ,
        subject : ["국어","영어","수학"]
    }

    let teacher2 = {
        name: "이서희",
        job: "프론트엔드 강사",
        address: {
            city: "화성시",
            town: "동탄",
            detail: "누니 코딩 학원 3층"
        }
    };

    let company = {
  name: "Nu’ni Tech",
  field: "AI 안경 플랫폼",
  ceo: {
    name: "이서희",
    age: 32,
    career: "프론트엔드 개발자 출신 CEO"
  }
};




  return (
    <div>

        <h3>회사 안에 대표 객체</h3>
        <p>회사대표:{company.name}</p>
        <p>회사 대표의 커리어: {company.ceo.career}</p>


        <br /><br /><br />
        <h3>객체 타입 안에 또 객체 사용하기 </h3>
        <p>이서희 강사의 직업은?</p>
        <p>{teacher2.job}</p>
        <p>이서희 강사가 사는 도시는?</p>
        <p>{teacher2.address.city}</p>




        <br /><br /><br />
        <h3>객체 타입 안에 배열 사용하기</h3>
        
        <p>현재 김민준의 제일 잘하는 과목은?</p>
        <p>{student.subject[1]}입니다.</p>
        
        
        
        <p>강사가 여러 과목을 가르칠 수있는 내용</p>
        <p>이서희강사가 현재 과목: {teacher.subject[3]}</p>



    </div>
  )
}