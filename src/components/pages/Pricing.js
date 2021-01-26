import React, {useState} from 'react'
import {Close} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import Contact from './Contact'
import '../css/pricing.css'
function Pricing() {
    const [openForm, setOpenForm] = useState(false)

    const openFormHandler = (e) =>{
        setOpenForm(true)
    }
    return (
        <div className="prices" id="prices">
            <div onClick={() => setOpenForm(false)} className={`${openForm && "overlay"}`}></div>
            <div className="prices__container">
                <div className={`hide__form ${openForm && "modal__form"}`}>
                    <div onClick={()=> setOpenForm(false)} className="close">
                        <Close className="icon" />
                    </div>
                    <Contact />
                </div>
                <div className="title">
                    <h2>Affordable pricing plan for all customers</h2>
                </div>
                <div className="content">
                    <div className="title">
                        <h2>Custom Website</h2>
                    </div>
                    <div className="price">
                        <h2>£500</h2>
                    </div>
                    <div className="body">
                        <ul>
                            <li>Lorem consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem  consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lor ectetur adipisicing elit. Quibusdam, fugit.</li>
                        </ul>
                    </div>
                    <div onClick={openFormHandler} className="btn">
                        <Button>Order now</Button>
                    </div>
                </div>
                <div className="content full__package">
                    <div className="title">
                        <h2>Full Package</h2>
                    </div>
                    <div className="price">
                        <h2>£500</h2>
                    </div>
                    <div className="body">
                        <ul>
                            <li>Lorem consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem  consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lor ectetur adipisicing elit. Quibusdam, fugit.</li>
                        </ul>
                    </div>
                    <div onClick={openFormHandler} className="btn">
                        <Button>Order now</Button>
                    </div>
                </div>
                <div className="content">
                    <div className="title">
                        <h2>E-commerce</h2>
                    </div>
                    <div className="price">
                        <h2>£500</h2>
                    </div>
                    <div className="body">
                        <ul>
                            <li>Lorem consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lorem  consectetur adipisicing elit. Quibusdam, fugit.</li>
                            <li>Lor ectetur adipisicing elit. Quibusdam, fugit.</li>
                        </ul>
                    </div>
                    <div onClick={openFormHandler} className="btn">
                        <Button>Order now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
