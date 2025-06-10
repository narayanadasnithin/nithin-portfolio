import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar/navbar';
import Home from './components/sections/Home/home';
import  {About} from './components/sections/About/about';
import  {TechnicalSkills}  from './components/sections/TechnicalSkills/technicalskills';
import Career from './components/sections/Career/career';
import { Contact } from './components/sections/Contact/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="Your portfolio showcasing your skills and projects." />
          <meta name="keywords" content="React, Developer, Portfolio, Web Development" />
          <meta name="author" content="Your Name" />
          <title>Nithin Portfolio</title>
        </Helmet>
        <Navbar />
        <Home />
        <About />
        <TechnicalSkills />
        <Career />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
