import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Log from './components/Log';
import Sign from './components/Sign';
import HomePage from './components/HomePage';
import EventReg from './components/EventReg';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import VolReg from './components/VolReg';
import Events from './components/Events';
import Profile from './components/Profile';
import MyEvents from './components/MyEvents';
import VEvents from './components/VEvents';


function App() {
  return (

    
    <div className="app-container">
      
      
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Log/>}/>
          <Route path="/signup" element={<Sign/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/eventreg" element={<EventReg/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/volreg" element={<VolReg/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/registeration/:eventId" element={<VolReg />} />
          <Route path="/MyEvents" element={<MyEvents/>}/>
          <Route path="/Volunteered-Events" element={<VEvents/>}/>
          <Route path="/registeration" element={<VolReg/>}/>
          <Route path="/events" element={<Events/>}/>

        </Routes>
      </main>
      <Footer />
      
    </div>
  );
}

export default App
