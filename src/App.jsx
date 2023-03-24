import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTopButton from './components/ScrollTopButton'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
    </div>
  )
}

export default App
