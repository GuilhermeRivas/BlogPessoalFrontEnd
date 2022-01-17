import React from 'react';
import Home from './paginas/home/Home';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
        <Home />
      <Footer />
    </>
  );
}

export default App;
