import React from 'react';
import { NavbarComponent } from "../../components/navbar/navbar";
import './VideoPage.css';

export function VideoPage(): React.ReactElement {
  return (
    <div className="video-page-container">
      {/* Navbar (stânga) */}
      <div className="video-navbar">
        <NavbarComponent />
      </div>

      {/* Conținut video (mijloc) */}
      <div className="video-content">
        <h2 className="video-title">Learning Session: Effective Communication</h2>
        
        <div className="video-player-wrapper">
          <iframe
            className="video-player"
            src="https://www.youtube.com/embed/8SOQduoLgRw"
            title="Effective Communication Training"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-description">
          <p>
            This session explores key techniques to enhance communication skills 
            in a corporate environment. Learn how to express ideas clearly, 
            manage feedback, and collaborate effectively across teams.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
