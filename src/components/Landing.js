import React from 'react'
import Nav from '../components/Nav'
import ShowCase from './pages/Showcase'
import Services from './pages/Services'
import FeedBack from './pages/FeedBack'

import './css/landing.css'
function Landing() {
    return (
        <div className="landing" id="landing">
            <Nav />
            <ShowCase />
            <Services />
            <FeedBack />
        </div>
    )
}

export default Landing
