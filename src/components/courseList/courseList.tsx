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
      iconUrl: 'https://cdn.iconscout.com/icon/free/png-256/figma-2-226079.png', // Figma icon
      title: 'Learn Figma',
      author: 'by Christopher Morgan',
      duration: '6h 30min',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/32/32292.png', // Camera icon (placeholder)
      title: 'Analog photography',
      author: 'by Gordon Norman',
      duration: '3h 15min',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', // Instagram icon
      title: 'Master Instagram',
      author: 'by Sophie Gill',
      duration: '7h 40min',
    },
    {
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/350/350315.png', // Pencil icon (placeholder)
      title: 'Basics of drawing',
      author: 'by Jean Tate',
      duration: '11h 30min',
    },
    {
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg', // Photoshop icon
      title: 'Photoshop - Essence',
      author: 'by David Green',
      duration: '5h 35min',
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