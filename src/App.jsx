import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Log from './components/Log';
import Sign from './components/Sign';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom'
import EventReg from './components/EventReg';


function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Sign/>}/>
          <Route path="/login" element={<Log/>}/>
          <Route path="/eventreg" element={<EventReg/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App

