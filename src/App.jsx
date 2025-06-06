import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Log from './components/Log';
import Sign from './components/Sign';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<Sign/>}/>
          <Route path="/login" element={<Log/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App

