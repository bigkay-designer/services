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

            <div className="title__landing">
                <h2>Testimonials</h2>
            </div>
            <FeedBack />

            <div className="title__landing">
                <h2>Affordable pricing plan for all customers</h2>
            </div>
            <Pricing />

            <div className="title__landing">
                <h2>Contact us</h2>
            </div>
            <div id="contact__id">
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Landing
