import { MantineProvider } from '@mantine/core'
import './App.css'
import Home from './pages/home/home'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

import '@mantine/core/styles.css'
import User from './pages/user-dashboard/user'
import LearningModules from './pages/LearningModules/LearningModules'
import QuizPage from './pages/QuizPage/QuizPage'
import { ChatBoxAIPage } from './pages/ChatBoxAIPage/ChatBoxAIPage'
import { ProgressPage } from './pages/ProgressPage/ProgressPage'
import VideoPage from './pages/VideoPage/VideoPage'
import VrPage from './pages/VrPage/VrPage'
import { CourseDetails } from './components/couseDetails/courseDetails'


const courses = [
  { id: 'office365', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Microsoft_365_%282022%29.svg/1091px-Microsoft_365_%282022%29.svg.png', title: 'Mastering Office 365', author: 'by Synapz', duration: '6h 30min' },
  { id: 'gdpr', iconUrl: '...', title: 'GDPR Compliance Essentials', author: 'by Synapz', duration: '3h 20min' },
  // restul...
];

function CourseDetailWrapper() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) return <p>Course not found</p>;

  return <CourseDetails {...course} />;
}

function App() {

  
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-dashboard" element={<User/>}/>
          <Route path="/learning-modules" element={<LearningModules/>}/>
          <Route path="/quizzes" element={<QuizPage/>}/>
          <Route path="/chatbox" element={<ChatBoxAIPage/>}/>
          <Route path="/progress" element={<ProgressPage/>}/>
          <Route path="/video" element={<VideoPage/>}/>
          <Route path="/vr" element={<VrPage/>}/>
          <Route path="/course/:courseId" element={<CourseDetailWrapper/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}
export default App