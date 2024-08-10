import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
