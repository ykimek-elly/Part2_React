

import styles from './MainPage.module.scss';

export default function MainPage() {
  return (
    <div>
      <h1>메인 페이지입니다.</h1>

      <div className={styles.card}>
        <h2>SCSS Module 적용 완료!</h2>
        <p>이 스타일은 MainPage 컴포넌트에서만 안전하게 격리됩니다.</p>
      </div>
    </div>
  );
}