
// 1초 지연을 흉내내는 헬퍼 함수
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// --- 가상 데이터 ---

const mockProfile = {
  fullName: 'Jane Doe',
  email: 'jane.doe@email.com',
  major: 'Computer Science',
};

const mockAttendance = {
  totalPercent: 92,
  labels: ['Mont', 'Monh', 'Tunt', 'Astb', 'Monh'], // X축 (월)
  data: [50, 65, 60, 80, 75], // Y축 (출석률)
};

const mockProgress = {
  overall: 75,
  currentSemester: 88,
  assignments: 90,
};

// --- React Query의 queryFn으로 사용될 함수들 ---

// 1. 프로필 정보 가져오기
export const fetchProfile = async () => {
  await delay(500); // 0.5초 로딩 흉내
  return mockProfile;
};

// 2. 출석률 정보 가져오기
export const fetchAttendance = async () => {
  await delay(1000); // 1초 로딩 흉내
  return mockAttendance;
};

// 3. 진척도 정보 가져오기
export const fetchProgress = async () => {
  await delay(1200); // 1.2초 로딩 흉내
  return mockProgress;
};