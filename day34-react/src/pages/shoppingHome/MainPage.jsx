import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const impNumber = "imp44278304";
  const apiKey = "0245647068224887";
  const apiSecret =
    "Kh9mpad3GtGJSeNU4bLwkUkEntZxypNEiU85vm0NztT3zIeiI8WdxKDIiChme4XPpSiRadHB3ROCgIgu";
  const pg = "html5_inicis";
  const signKey = "SU5JTElURV9UUklQTEVERVNfS0VZU1RS";


  // 페이지 이동을 위한 기능을 걸어야된다. 
  const Navigate = useNavigate();



  // 1. index.html 파일에서 window객체에 IMP 포트원에서 제공하는
  //    기능들 가져오기!
  // console.log(IMP);

  // 실무에서는 변수를 이용해서 함수를 집어넣고 사용한다.
  const onPayment = () => {
    const { IMP } = window;

    //  IMP 객체 확인 !
    console.log("IMP 로딩 여부 확인:",IMP);

    if(!IMP){
      alert("PortOne SDK가 로드 되지 않았습니다.");
      return ; // 버튼함수 종료!
    }


    // 2. IMP.init("가맹점식별코드")
    IMP.init(impNumber);

    console.log("IMP init 완료!");

    // 3. 결제창 요청!
    IMP.request_pay({
      // -1 . pg 사 코드
      pg: pg,

      // -2. 결제 주문번호 - 절대 중복안됨!
      //    Date() 날짜시간을 이용해서 주문번호를 생성
      merchant_uid: `order_${Date.now()}`,

      // -3. 상품명 입력
      name: "무선이어폰",

      // -4. 결제 금액 입력
      amount: 10000,
      },
      //  4. 내가 요청을 보냈으니 응답을 받아야된다.
      (res) => {
        console.log("결제 결과:", res);
        if(res.success){
          //결제 성공 -> SuccessPage이동!
          Navigate("/success", {
            state : res
          })

        }else{
          // 결제 실패 -> FailPage로 이동
          Navigate("/fail",{
                state : res
          })
        }
      }
  
    );
  };

  return (
    <div className="app">
      <button onClick={onPayment}>결제하기</button>
    </div>
  );
}



/*
[1] 사용자가 결제 버튼 클릭
        │
        ▼
[2] onPayment 함수 실행
        │
        │  const { IMP } = window;
        │  └→ PortOne SDK 로드 여부 확인
        │
        ▼
[3] IMP.init("가맹점식별코드")
        │
        │ PortOne에게:
        │  "나 이 상점 코드(imp번호)로 결제할게!"
        │ 라고 초기 설정하는 단계
        │
        ▼
[4] IMP.request_pay(결제정보, callback)
        │
        │ PortOne 결제창 실행
        │   - 카드 입력 화면
        │   - 카카오페이/네이버페이 등 선택
        │
        ▼
[5] 사용자가 결제 시도
        │
        │ PortOne 서버 → PG사(카드사)로 결제 승인 요청
        │
        ▼
[6] PG사 결제 응답을 PortOne → 브라우저에 전달
        │
        ▼
[7] callback(res) 실행
        │
        │  res.success === true ?
        │   → 결제 성공
        │
        │  res.success === false ?
        │   → 결제 실패
        │
        ▼
[8] 성공/실패 처리
        │
        ├─ alert("성공!")
        └─ alert("실패…")


*/