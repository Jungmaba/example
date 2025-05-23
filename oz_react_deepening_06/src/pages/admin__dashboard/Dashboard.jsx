import React from 'react';
import { dashboardStats } from '../../database/mockData';
function Dashboard() {
  return (
    <div>
      <h1>대시보드</h1>
      <div className="stat-card">
        <h3>전체 유저</h3>
        <div className="stat-value">{dashboardStats.totalUsers}</div>
      </div>
      <div className="stat-card">
        <h3>활성화 유저</h3>
        <div className="stat-value">{dashboardStats.activeUsers}</div>
      </div>
      <div className="stat-card">
        <h3>수익</h3>
        <div className="stat-value">${dashboardStats.revenue}</div>
      </div>
    </div>
  );
}

export default Dashboard;
