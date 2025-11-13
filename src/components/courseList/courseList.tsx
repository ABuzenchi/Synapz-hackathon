import React from 'react';
import './courseList.css';


import { FiClock, FiStar } from 'react-icons/fi';


interface CourseItemProps {
  iconUrl: string; 
  title: string;
  author: string;
  duration: string;
}


function CourseItem({ iconUrl, title, author, duration }: CourseItemProps): React.ReactElement {
  return (
    <div className="course-list-item">
      <div className="course-item-left">
        <img src={iconUrl} alt={title} className="course-item-icon" />
        <div className="course-item-info">
          <span className="course-item-title">{title}</span>
          <span className="course-item-author">{author}</span>
        </div>
      </div>
      
      <div className="course-item-right">
        <div className="course-item-meta">
          <FiClock className="meta-icon" />
          <span className="meta-text">{duration}</span>
        </div>
        <button className="view-course-button">View course</button>
      </div>
    </div>
  );
}


export function CourseList(): React.ReactElement {

 const courses: CourseItemProps[] = [
  {
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/1091px-Microsoft_365_%282022%29.svg.png', // Microsoft Office icon
    title: 'Mastering Office 365',
    author: 'by Synapz',
    duration: '6h 30min',
  },
  {
    iconUrl: 'https://www.loginradius.com/_next/static/media/gdpr-compliant.6f6aef57.webp', // GDPR / privacy icon
    title: 'GDPR Compliance Essentials',
    author: 'by Synapz',
    duration: '3h 20min',
  },
  {
    iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvU2tB7wyjuUMosuQgLcW6Tmjp-KmH0AjslQ&s', // Safety helmet icon for SSM
    title: 'Occupational Health & Safety (SSM)',
    author: 'by Synapz',
    duration: '6h 30min',
  },
  {
    iconUrl: 'https://img.freepik.com/premium-vector/generate-ai-artificial-intelligence-logo-ai-logo-concept_268834-2200.jpg?w=360', // AI / robot icon
    title: 'Introduction to AI Basics',
    author: 'by Synapz',
    duration: '8h 30min',
  },
  {
    iconUrl: 'https://www.arenasolutions.com/wp-content/uploads/What-is-Cloud-QMS.jpg', // Photoshop icon
    title: 'Quality Management',
    author: 'by Synapz',
    duration: '5h 40min',
  },
];



  return (
    <div className="courses-section-container">
      <h2 className="section-heading">Courses</h2>
      
      <div className="course-filters">
        <button className="filter-button active">All Courses</button>
      </div>

      <div className="course-list">
        {courses.map((course, index) => (
          <CourseItem key={index} {...course} />
        ))}
      </div>
    </div>
  );
}