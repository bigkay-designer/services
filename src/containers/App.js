import React from 'react'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'
// import Countdown from 'react-countdown';
import Landing from '../components/Landing'
import PrivacyPolicy from '../components/pages/privacyPolicy'
import Nav from '../components/Nav'
import Footer from '../components/pages/Footer'
import './App.css';
import NotFound from '../components/NotFound'

function App() {

  return (
        <Router>
          <div className="App">
                <Nav />
                  <div className="content__wrap">
                    <Switch>
                        <Route path="/" exact component={Landing} />
                        <Route path="/privacy-policy" component={PrivacyPolicy} />
                        <Route path="" component={NotFound}></Route>
                    </Switch>
                  </div>
                <Footer />
          </div>
        </Router>
  );
}

export default App;
