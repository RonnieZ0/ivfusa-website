import React from 'react';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Note from './components/Note';
import Sliders from './components/Sliders';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sliders />
      <Note />
      <Cards />
      <Feature />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
