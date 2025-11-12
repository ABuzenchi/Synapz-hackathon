import { 
  FiHome, 
  FiUser, 
  FiSettings, 
  FiLogOut, 
  FiMessageSquare 
} from 'react-icons/fi';
import { MdFactCheck } from "react-icons/md";
import { FaGraduationCap, FaClipboardCheck, FaChartLine } from 'react-icons/fa';
import './Navbar.css'; 

export function NavbarComponent() {
  return (
    <div className="vertical-navbar">
    
      <div className="navbar-top">
        <div className="logo">Synapz</div>
        
        <nav className="nav-icons">
          <a href="#" className="nav-icon" title="Dashboard">
            <FiHome />
          </a>
          <a href="#" className="nav-icon" title="Learning Modules">
            <FaGraduationCap />
          </a>
          <a href="#" className="nav-icon" title="Quizzes">
            <MdFactCheck />
          </a>
          <a href="#" className="nav-icon" title="HR Feedback">
            <FiMessageSquare />
          </a>
          <a href="#" className="nav-icon" title="Progress">
            <FaChartLine />
          </a>
          <a href="#" className="nav-icon" title="Settings">
            <FiSettings />
          </a>
        </nav>
      </div>
      
      <div className="navbar-bottom">
        <a href="#" className="nav-icon" title="Logout">
          <FiLogOut />
        </a>
      </div>

    </div>
  );
}
