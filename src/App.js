import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';


import Nav from './nav';
import About from './pages/about/index';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Footer from './Footer';

import projects from './assets/projects.json'

function App() {
  return (
    <Router basename='/react-portfolio/'>
    <div>
      <Nav />
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" render={() => ( <Portfolio projects={projects} />)} />
      <Route exact path="/contact" component={Contact} />
      <Footer />

    </div>
    </Router>
  );
}

export default App;
