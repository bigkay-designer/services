import React, {useState} from 'react'
import {Button} from "@material-ui/core"
import image from '../images/vec-sh.png'
import '../css/showcase.css'
import ContactModal from './ContactModal'
function Showcase() {
    const [openForm, setOpenForm] = useState(false)
    const CloseFormHandler = () => {
        setOpenForm(false)
    }
    return (
        <div className="showCase" id="showcase">
            <div onClick={() => setOpenForm(false)} className={`${openForm && "overlay"}`}></div>
            <div className="showCase__bg"></div>
            <div className="showCase__container">
             <ContactModal openFormProp={openForm} closeFormProp={CloseFormHandler} />

                <div className="title">
                    <p className="question__para">want to transfer your business and gain customers?</p>
                    
                    <p>Well at BK DesignPlus we turn ideas into great digital solutions. We Specialise in <span> Creative and Affordable Web Design</span></p>

                    <p className="sub__para">Web Design, Web Development, UX/UI, Email Marketing & Branding.</p>
                    <div onClick={() => setOpenForm(true)} className="btn">
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
