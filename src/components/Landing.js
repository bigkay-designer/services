import React from 'react'
import Nav from '../components/Nav'
import ShowCase from './pages/Showcase'
import Services from './pages/Services'
import OtherServices from './pages/otherServices'
import FeedBack from './pages/FeedBack'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import './css/landing.css'
function Landing() {
    return (
        <div className="landing" id="landing">
            <Nav />
            <ShowCase />
            <Services />
            <OtherServices />
            <div className="title__feedback">
                <h2>Testimonials</h2>
            </div>
            <FeedBack />
            <Pricing />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing
