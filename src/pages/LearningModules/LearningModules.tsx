import React from 'react';
import { NavbarComponent } from "../../components/navbar/navbar";
import { CourseList } from "../../components/courseList/courseList";
import './LearningModules.css';

const LearningModules = () => {
  return (
    <div className="learning-modules-page">
      
      {/* Stânga */}
      <div className="lm-navbar">
        <NavbarComponent />
      </div>

      {/* Main */}
      <div className="lm-main">
        <h2 className="page-title">Learning Modules</h2>
        
        {/* Filtre / Tab-uri */}
        <div className="lm-filters">
          <button className="filter-button active">All</button>
          <button className="filter-button">Mandatory</button>
          <button className="filter-button">Optional</button>
        </div>

        {/* Lista modulelor */}
        <CourseList />
      </div>
      
    </div>
  );
};

export default LearningModules;
