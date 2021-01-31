import React from 'react'
import {Star} from '@material-ui/icons'
import Nav from '../components/Nav'
import ShowCase from './pages/Showcase'
import Services from './pages/Services'
import OtherServices from './pages/otherServices'
import Projects from './pages/Projects'
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

            <div className="title__landing">
                <h2>Our services include</h2>
            </div>
            <Services />

            <div className="title__landing">
                <h2>View Our previous Projects</h2>
            </div>
            <Projects />
            
            <div className="title__landing">
                <h2>Affordable pricing plan for all customers</h2>
            </div>
            <Pricing />

            <div className="title__landing">
                <h2>The Process</h2>
            </div>
            <OtherServices />
            
            <div className="wrap">
                <div className="wrap__container">
                    <div className="title__landing">
                        <h2>Testimonials</h2>
                        <div className="icons__div">
                            <Star className="icon" />
                            <Star className="icon" />
                            <Star className="icon" />
                            <Star className="icon" />
                            <Star className="icon" />
                        </div>
                    </div>
                    <FeedBack />
                </div>
                <div className="wrap__container">
                    <div className="title__landing">
                        <h2>Contact us</h2>
                    </div>
                    <div id="contact__id">
                        <Contact />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing
