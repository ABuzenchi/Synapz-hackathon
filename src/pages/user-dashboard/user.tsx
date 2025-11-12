import React from 'react';
import { NavbarComponent } from "../../components/navbar/navbar";
import { WelcomeCard } from "../../components/welcomeCard/welcomeCard";
import { CourseCarousel } from "../../components/courseCarusel/courseCarusel";
import { CourseList } from "../../components/courseList/courseList";
import { DashboardHeader } from "../../components/DashboardHeader/DashboardHeader";
import { StatisticsChart } from "../../components/StatisticsChart/StatisticsChart";

import './User.css';
import { DailyTipCard } from '../../components/DailyTipCard/DailyTipCard';

const User = () => {
  return (
    <div className="user-page-container">
      {/* Stânga */}
      <div className="user-navbar">
        <NavbarComponent />
      </div>

      {/* Mijloc */}
      <div className="user-main">
        <WelcomeCard />
        <CourseCarousel />
        <CourseList />
      </div>

      {/* Dreapta */}
      <div className="user-right">
        <DashboardHeader />
        <StatisticsChart />
        <div className="right-bottom-message">
         <DailyTipCard/>
        </div>
      </div>
    </div>
  );
};

export default User;
