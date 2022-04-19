import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './components/Navbar';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      
    <Router>
        <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/service' element={<Service />} />
            </Routes>
          <Footer />
        </Router>
  )
}

export default App