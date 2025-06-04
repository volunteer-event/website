import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        {/* Your page content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App

