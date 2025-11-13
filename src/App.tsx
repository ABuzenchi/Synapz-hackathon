import { MantineProvider } from '@mantine/core'
import './App.css'
import Home from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@mantine/core/styles.css'
import User from './pages/user-dashboard/user'
import LearningModules from './pages/LearningModules/LearningModules'
import QuizPage from './pages/QuizPage/QuizPage'
import { ChatBoxAIPage } from './pages/ChatBoxAIPage/ChatBoxAIPage'
import { ProgressPage } from './pages/ProgressPage/ProgressPage'
import VideoPage from './pages/VideoPage/VideoPage'

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
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}
export default App