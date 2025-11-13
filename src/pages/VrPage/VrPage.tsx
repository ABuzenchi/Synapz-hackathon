import './VrPage.css';
import { NavbarComponent } from '../../components/navbar/navbar';
import vrImage from "../../assets/vr.png"; 

const VrPage=()=> {
  return (
    <div className="vr-page-container">
      {/* Navbar pe stânga */}
      <NavbarComponent />

      {/* Conținut principal */}
      <div className="vr-main-content">
        <div className="vr-image-container">
          <img 
            src={vrImage} 
            alt="Virtual Reality Experience" 
            className="vr-image"
          />
        </div>

        <button className="join-button">Join Experience</button>
      </div>
    </div>
  );
}

export default VrPage;