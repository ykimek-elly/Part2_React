

import React from 'react';
// SCSS Module로 이 페이지의 레이아웃 스타일을 가져옵니다.
import styles from './ProfilePage.module.scss';

// 방금 만든 3개의 컴포넌트를 import 합니다.
import ProfileSettings from '../components/ProfileSettings';
import AttendanceChart from '../components/AttendanceChart';
import MyProgress from '../components/MyProgress';

export default function ProfilePage() {
  return (
    <div className={styles.profilePage}>
      {/* 1. 프로필 설정 (왼쪽) */}
      <div className={styles.leftColumn}>
        <ProfileSettings />
      </div>

      {/* 2. 출석 + 진도 (오른쪽) */}
      <div className={styles.rightColumn}>
        <AttendanceChart />
        <MyProgress />
      </div>
    </div>
  );
}