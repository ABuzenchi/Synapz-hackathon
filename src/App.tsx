import { MantineProvider } from '@mantine/core'
import './App.css'
import Home from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@mantine/core/styles.css'
import User from './pages/user/user'

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}
export default App