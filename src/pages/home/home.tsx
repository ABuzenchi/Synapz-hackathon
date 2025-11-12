import './Home.css';
import { Player } from '@lottiefiles/react-lottie-player'; 

import flyAnimation from '../../assets/animationAI.json';
import AuthPage from '../../components/auth/auth';

const Home = () => {
    return (
      <div className="container">
          <div className="buttons">
          <AuthPage/>
          </div>
  
        <div className="animation">
          <Player
            autoplay
            loop
            src={flyAnimation}
            className="lottie-player"
          />
        </div>
      </div>
    );
  };
  export default Home;