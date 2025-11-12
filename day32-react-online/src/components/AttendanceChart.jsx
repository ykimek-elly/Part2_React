import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchAttendance } from '../api/mockApi';
import styles from './Widget.module.scss'; // 공통 위젯 스타일
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

// Chart.js에 Line 차트 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function AttendanceChart() {
  const { data: attendance, isLoading, isError } = useQuery({
    queryKey: ['attendance'],
    queryFn: fetchAttendance,
  });

  if (isLoading) return <div className={styles.widgetBox}>Loading...</div>;
  if (isError) return <div className={styles.widgetBox}>Error!</div>;

  // Chart.js에 맞는 데이터 형식
  const data = {
    labels: attendance.labels,
    datasets: [
      {
        label: 'Attendance',
        data: attendance.data,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3, // 선을 부드럽게
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false }, // 범례 숨기기
    },
    scales: {
      y: {
        beginAtZero: true, // Y축 0부터 시작
      },
    },
  };

  return (
    <div className={styles.widgetBox}>
      <h3>Attendance</h3>
      <div className={styles.mainPercent}>{attendance.totalPercent}%</div>
      <p>Weekly Attendance</p>
      <Line options={options} data={data} />
    </div>
  );
}