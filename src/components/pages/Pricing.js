import React, {useState} from 'react'
import {Close} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import Contact from './Contact'
import '../css/pricing.css'
function Pricing() {
    const [openForm, setOpenForm] = useState(false)
    const [currentPackage, setCurrentPachage] = useState("")
    const openFormHandler = (e) =>{
        e.preventDefault()
        setCurrentPachage (e.currentTarget.parentElement.firstChild.firstChild.innerHTML)
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
                    <div className="title">
                        <h2>{currentPackage}</h2>
                    </div>
                    <Contact option={openForm} />
                </div>
                <div className="content">
                    <div className="title">
                        <h2>Bespoke</h2>
                    </div>
                    <div className="price">
                    <h2> <span className="money__sign">£</span><span className="amount">599</span></h2>
                    </div>
                    <div className="body">
                        <ul>
                            <li>responsive desing </li>
                            <li>Bespoke 5 page Website Design</li>
                            <li>1 Year Free Domain & Hosting (worth £65+)</li>
                            <li>100% Ownership</li>
                            <li className="grey__overlay">Free HTTPS encription</li>
                            <li className="grey__overlay">Google My Business Set Up</li>
                            <li className="grey__overlay">Website Copy Writing (Upto 4000 words)</li>
                            <li className="grey__overlay">Google Maps</li>
                            <li className="grey__overlay">Contact form </li>
                            <li className="grey__overlay">payment gateway</li>
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
                    <h2> <span className="money__sign">£</span><span className="amount">999</span></h2>
                    </div>
                    <div className="body">
                        <ul>
                            <li>responsive desing </li>
                            <li>Bespoke unlimited page Website Design</li>
                            <li>1 Year Free Domain & Hosting (worth £65+)</li>
                            <li>100% Ownership</li>
                            <li>Free HTTPS encription</li>
                            <li className="grey__overlay">Google My Business Set Up</li>
                            <li className="grey__overlay">Website Copy Writing (Upto 4000 words)</li>
                            <li className="grey__overlay">Google Maps</li>
                            <li >Contact form </li>
                            <li className="grey__overlay">payment gateway</li>
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
                    <h2> <span className="money__sign">£</span><span className="amount">1200</span></h2>
                    </div>
                    <div className="body">
                        <ul>
                            <li>responsive desing </li>
                            <li>Bespoke 5 page Website Design</li>
                            <li>1 Year Free Domain & Hosting (worth £65+)</li>
                            <li>100% Ownership</li>
                            <li>Free HTTPS encription</li>
                            <li>Google My Business Set Up</li>
                            <li>Website Copy Writing (Upto 4000 words)</li>
                            <li>Google Maps</li>
                            <li>Contact form </li>
                            <li>payment gateway</li>                        
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
