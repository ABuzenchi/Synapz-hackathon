import React from 'react';
import './DashboardHeader.css'; // We will create this CSS file next

// Import icons
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

// Placeholder for user avatar image
// Replace 'user-avatar.png' with the path to your actual image
import userAvatar from '../../assets/user-avatar.png'; 

export function DashboardHeader(): React.ReactElement {
  return (
    <div className="dashboard-header-container">
      
      {/* 1. Top Row: Search, Notifications, Profile */}
      <div className="header-top-row">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="user-controls">
          <button className="notification-button">
            <FiBell className="bell-icon" />
            <span className="notification-badge"></span> {/* The red dot */}
          </button>
          
          <div className="profile-section">
            <img src={userAvatar} alt="User Avatar" className="profile-avatar" />
            <FiChevronDown className="profile-arrow" />
          </div>
        </div>
      </div>

      {/* 2. Bottom Row: Stat Cards */}
      <div className="header-stats-row">
        
        {/* Card 1: Courses Completed */}
        <div className="stat-card">
          <span className="stat-number">11</span>
          <span className="stat-label">
            Courses
            <br />
            completed
          </span>
        </div>
        
        {/* Card 2: Courses in Progress */}
        <div className="stat-card">
          <span className="stat-number">4</span>
          <span className="stat-label">
            Courses
            <br />
            in progress
          </span>
        </div>

      </div>
    </div>
  );
}