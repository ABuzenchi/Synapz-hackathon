import React from 'react';
import { NavbarComponent } from '../../components/navbar/navbar';
import { StatisticsChart } from '../../components/StatisticsChart/StatisticsChart';
import { DailyTipCard } from '../../components/DailyTipCard/DailyTipCard';
import './ProgressPage.css';

interface ModuleProgress {
  title: string;
  progress: number;
}

const topModules: ModuleProgress[] = [
  { title: 'Company Overview', progress: 80 },
  { title: 'IT Security Basics', progress: 45 },
  { title: 'Internal Tools Training', progress: 20 },
];

export function ProgressPage(): React.ReactElement {
  return (
    <div className="progress-page-container">
      {/* Navbar */}
      <div className="progress-navbar">
        <NavbarComponent />
      </div>

      {/* Main content */}
      <div className="progress-main">
        <h2 className="progress-title">Your Learning Progress</h2>

        {/* Stats row */}
        <div className="progress-stats-row">
          <div className="progress-stat-card">
            <span className="stat-number">12</span>
            <span className="stat-label">Modules Completed</span>
          </div>
          <div className="progress-stat-card">
            <span className="stat-number">5</span>
            <span className="stat-label">Quizzes Passed</span>
          </div>
          <div className="progress-stat-card">
            <span className="stat-number">68%</span>
            <span className="stat-label">Overall Progress</span>
          </div>
        </div>
        
        {/* Chart */}
        <StatisticsChart />

        {/* Top modules */}
        <div className="top-modules-section">
          <h3>Top Modules in Progress</h3>
          <div className="top-modules-list">
            {topModules.map((mod, idx) => (
              <div key={idx} className="top-module-card">
                <span className="module-title">{mod.title}</span>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${mod.progress}%` }}></div>
                </div>
                <span className="progress-percent">{mod.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
