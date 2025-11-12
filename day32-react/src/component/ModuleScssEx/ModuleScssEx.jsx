import styles from "./ModuleScssEx.module.scss";

export default function ModuleScssEx() {
  return (
    <div>
        <h3>모듈 scss</h3>

         <div className={styles.box}>
            Hello Css!

        </div>

        <p className={styles.p}>다른 파일과 안 겹치게 만드는 도구! module</p>
        <p>컴포넌트 전용 스타일 전용 락커!</p>
    </div>
  )
}
