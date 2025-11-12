

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProgress } from '../api/mockApi';
import widgetStyles from './Widget.module.scss'; // 공통 위젯 스타일
import chartStyles from './MyProgress.module.scss'; // 이 컴포넌트 전용 스타일
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

// 개별 원형 차트 컴포넌트 (재사용을 위해 분리)
function ProgressCircle({ label, percentage }) {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage], // 채워진 부분, 빈 부분
        backgroundColor: ['#0070f3', '#f0f0f0'],
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  };
  const options = {
    cutout: '75%', // 도넛 두께
    plugins: { tooltip: { enabled: false } }, // 툴팁 끄기
  };

  return (
    <div className={chartStyles.circleBox}>
      <div className={chartStyles.chartWrapper}>
        <Doughnut data={data} options={options} />
        <span className={chartStyles.percentage}>{percentage}%</span>
      </div>
      <p>{label}</p>
      <span>Completed</span>
    </div>
  );
}

// 메인 컴포넌트
export default function MyProgress() {
  const { data: progress, isLoading, isError } = useQuery({
    queryKey: ['progress'],
    queryFn: fetchProgress,
  });

  if (isLoading) return <div className={widgetStyles.widgetBox}>Loading...</div>;
  if (isError) return <div className={widgetStyles.widgetBox}>Error!</div>;

  return (
    <div className={widgetStyles.widgetBox}>
      <h3>My Progress</h3>
      <div className={chartStyles.container}>
        <ProgressCircle label="Overall Courses" percentage={progress.overall} />
        <ProgressCircle label="Current Semester" percentage={progress.currentSemester} />
        <ProgressCircle label="Assignments" percentage={progress.assignments} />
      </div>
    </div>
  );
}