// src/App.js
import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Services />
      <ContactForm />
    </div>
  );
};

export default App;
