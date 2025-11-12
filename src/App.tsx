import { MantineProvider } from '@mantine/core'
import './App.css'
import Home from './pages/home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@mantine/core/styles.css'

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  )
}
export default App