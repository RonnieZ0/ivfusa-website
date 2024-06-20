import React from 'react';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Nathan from './components/Nathan';
import Note from './components/Note'
import Sliders from './components/Sliders';
import Process from './components/Process'
import FAQ from './components/FAQ'
import Partners from './components/Partners';
import Doctors from './components/Doctors'
import Timeline from './components/Timeline'
import Blog from './components/Blog';
import Map from './components/Map';


function App() {
  return (
    <div className='text-black'>
      <Navbar />
      <Hero />
      <Map />
      <Sliders />
      <Note />
      <Nathan />
      <Partners />
      <Doctors />
      <Feature />
      <Process />
      <Cards />
      <FAQ />
      <Newsletter />
      <Timeline />
      <Blog />
      <Footer />
      
      
    </div>
  );
}

export default App;
