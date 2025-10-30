import React from 'react'

export default function scrollTest2() {
 
  
        // 1. div에 이벤트가 필요하다. onWheel
          //  onwheel 이벤트는 마우스 휠이 움직일 때 발생하는 이벤트다!
        
          // 2. 페이지 번호를 기억(변수)
          //  첫번째 페이지를 0번 이라 부른다.
          //  두번째 페이지를 1번 이라 부른다.
          //  세번째 페이지를 2번 이라 부른다.
          let [page , setPage] = useState(0);
        
        
          function handleWheel(event){
            
            // 3. 실제 휠 이벤트가 발생 했을 때 
            const pageHeight = window.innerHeight;
            console.log("한 페이지 높이(px):",pageHeight);
            
            // 4. 아래로 스크롤이 내려갔을 때 
            //  첫번째 페이지는 맨위 0px
            //  두번째 페이지는 맨위에서 952px 떨어진 것!
            //  세번째 페이지는 맨위에서 1904px 떨어진 것!
            // 첫번째 page  (0 * 952) 화면높이 계산 0px 맨위
            // 두번째        1 * 952  계산 952px      한칸 아래
            // 세번째        2                       두칸 아래
        
            // 현제 페이지 에서 휠을 돌렸을 때 다음 페이지로 이동해라
            // 아래로 내려갈때 어디까지 내려갈지 
            // 페이지가 2 밖에 없음 그 이상은 계산하면 안된다.
            // state props
            // delaY -> 휠을 얼마나, 어떤 방향으로 움직였는지 변화랑 차이 
            if(event.delaY  > 0 && page < 2){
              let nextPage = page +1;
              setPage(nextPage);
        
              // 크롬한테 지금 이 위치로 스크롤 해줘!
              // 맨 위를 기준으로 잡고 얼마나 내려갈지 선택 
              // (픽셀단위)
              window.scrollTo({
                top : pageHeight * nextPage,
                behavior : "smooth"
              });
            }
            // 5. 위로 스크롤이 내려갔을 때 
            // 맨위 top을 기준으로 0미만 떨어지면 안될 것이고 
            // 페이지의 번호 0미만으로 떨어지면 계산이 이상해질 것!
            if(event.delyaY < 0){
              // 페이지 감소 
              // 이동하는 코드를 작성 !
            }
            
            
            //console.log(event);
            // console.log(event.type == "wheel")
            // console.log(event.type == "keyboard");
        
          }
          return (
            <>
                <div onWheel={handleWheel} 
                      style={{height : "100vh"}}>
        
                      <section style={{
                        height : "100vh",
                        background : "tomato"}}>🍎 1페이지</section>
                      
                      <section style={{
                        height : "100vh",
                        background : "gold"}}>🍔 2페이지</section>
                      
                      <section style={{
                        height : "100vh",
                        background : "lightgreen"}}>🌭 3페이지</section>
                    </div>
             

                </>
          )
}