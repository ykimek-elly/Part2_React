import React, { useState } from 'react'
import styles from './ClsxEx.module.scss';
import clsx from 'clsx';
// import 변수명  s , css ,homeStyles

export default function ClsxEx() {

    // 조건을 비교하려면 변수가 필요! 화면에 보이는 변수
    const [isActive,setIsActive] = useState(true);

    const [isError , setIsError] = useState(false);


    let user = {
        name : "eryna"
    }
  return (
    <div>
        <h2 className={styles.title}>Clsx 라이브러리?</h2>

        <h3>여러개의 클래스명을 적용할 때 기본4 - 실무에서 가장 많이 사용</h3>
        {/* 자바스크립트 객체 key는 고정된 문자로 사용을 해야된다.
            변수명을 key값으로 사용하려고 하면 [] 감싸줘야된다! 
            
         module.css의 저장 방식  module.scss
         styles = {
            box : Home_box__9dsf3
            round: "Home_round__34fa0",
            active: "Home_active__2jf39",
            error: "Home_error__0wjsd"
         }    
        */}
        <div className={clsx({
                             [styles.box] : true,
                             [styles.round] : true,
                             [styles.active] : isActive,
                             [styles.error] : isError

                             })}>
            네번째
        </div>


        <br /><br /><br />


        
        <h3>여러개의 클래스명을 적용할 때 기본3 - 조건 같이 사용</h3>
        <div className={clsx(styles.box , 
                             styles.round,
                             styles.shadow,
                             isActive && styles.active,
                             isError && styles.error
                            )}>
            세번째
        </div>


        <br /><br /><br />
        <h3>여러개의 클래스명을 적용할 때 기본2</h3>
        <div className={clsx(styles.box , 
                             styles.round,
                             styles.shadow
                            )}>
            두번째
        </div>


        <br /><br /><br />
        <h3>여러개의 클래스명을 적용할 때 기본1 </h3>
        <div className={`${styles.box} 
                         ${styles.round}
                         ${styles.shadow}`}>
            첫번째
        </div>        
        <p>className 여러개 디자인을 깔끔하게 넣어주는 함수 </p>
        <p>className = "btn btn-1 btn-1-bg"</p>
        <p>외부 라이브러리이기 때문에 다운로드!</p>
        <p>npm install clsx</p>
    </div>
  )
}