import React from 'react'
import {Button} from "@material-ui/core"
import image from '../images/vec-sh.png'
import '../css/showcase.css'
function Showcase() {
    return (
        <div className="showCase" id="showcase">
            <div className="showCase__bg"></div>
            <div className="showCase__container">
                <div className="title">
                    <p className="question__para">want to transfer your business and gain customers?</p>
                    
                    <p>Well at BKDesign we turn ideas into great digital solutions. We Specialise in <span> Creative and Affordable web design</span></p>

                    <p className="sub__para">Web Design, Web Development, UX,UI & Branding.</p>
                    <div className="btn">
                        <Button className="btn__icon">Get A Quote</Button>
                    </div>
                </div>
                <div className="showCase__img">
                    <img src={image} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Showcase
