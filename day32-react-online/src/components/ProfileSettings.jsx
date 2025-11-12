
import { useQuery } from '@tanstack/react-query';
import { fetchProfile } from '../api/mockApi'; // API 함수 import
import styles from './ProfileSettings.module.scss'; // SCSS Module import
import profilePic from '../assets/react.svg'; // 임시 프로필 사진

export default function ProfileSettings() {
  // React Query로 프로필 데이터 가져오기
  const { data: profile, isLoading, isError } = useQuery({
    queryKey: ['profile'], // 데이터 별명
    queryFn: fetchProfile, // API 함수
  });

  // 로딩/에러 처리
  if (isLoading) return <div className={styles.loading}>Loading Profile...</div>;
  if (isError) return <div className={styles.error}>Error loading profile!</div>;

  return (
    <div className={styles.settingsBox}>
      <h2>Profile Settings</h2>

      <div className={styles.avatar}>
        <img src={profilePic} alt="Profile" />
        <button>Change Photo</button>
      </div>

      <div className={styles.form}>
        <label>Full Name</label>
        <input type="text" defaultValue={profile.fullName} />
        
        <label>Email Address</label>
        <input type="email" defaultValue={profile.email} />
        
        <label>Major</label>
        <input type="text" defaultValue={profile.major} />
        
        <label>Password</label>
        <input type="password" defaultValue="●●●●●●●●" />
        
        <button className={styles.saveButton}>Save Changes</button>
      </div>
    </div>
  );
}