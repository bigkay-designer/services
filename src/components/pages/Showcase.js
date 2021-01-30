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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia veritatis aspernatur delectus eum tenetur saepe nemo culpa aliquid quia.</p>
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
