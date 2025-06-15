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
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/volreg" element={<VolReg/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/registeration/:eventId" element={<VolReg />} />
          {/*
          
          <Route path="/myevents" element={<MyEvents/>}/>
          <Route path="/ve" element={<VEvents/>}/>
          */}
          <Route path="/registeration" element={<VolReg/>}/>
          <Route path="/events" element={<Events/>}/>

        </Routes>
      </main>
      <Footer />
      
    </div>
  );
}

export default App
