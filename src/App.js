import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Service from './Services';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
      <div>
        <Navbar />
        <div id="banner">
        <Banner/>
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Service />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
  );
}

export default App;
