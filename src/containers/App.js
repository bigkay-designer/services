import React from 'react'
import {Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
// import Countdown from 'react-countdown';
import Landing from '../components/Landing'
import PrivacyPolicy from '../components/pages/privacyPolicy'
import Nav from '../components/Nav'
import Footer from '../components/pages/Footer'
import './App.css';

function App() {
  const windowLocation = ['/', 'privacy-policy', '/newsletter']
  console.log(windowLocation)
  return (
      <Router>
        <div className="App">
          {
              window.location.pathname !== '/' && window.location.pathname !== '/privacy-policy' && window.location.pathname !== '/newsletter' ? <Redirect to="/" /> : null
          }
          <Nav />
          <div className="content__wrap">
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/" exact component={Landing} />
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
