import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import {Check} from '@material-ui/icons'
import ContactModal from './ContactModal'

import '../css/pricing.css'
function Pricing() {
    const [openForm, setOpenForm] = useState(false)
    const [currentPackage, setCurrentPachage] = useState("")
    const [bespoke, setBespoke] = useState(599)
    const [fullPackage, setFullPackage] = useState(999)
    const [eCommerce, setECommerce] = useState(1200)
    const [monthly, setMonthly] = useState(false)
    const [yearly, setYearly] = useState(true)
    const [paymentType, setPaymentType] = useState('ONE-TIME PAYMENT')
    const openFormHandler = (e) =>{
        e.preventDefault()
        setCurrentPachage (e.currentTarget.parentElement.firstChild.firstChild.innerHTML)
        setOpenForm(true)
    }
    const CloseFormHandler = () => {
        setOpenForm(false)
    }

    const paymentOptionHandler = (e) =>{
        e.preventDefault()
        let target = e.target.innerHTML

        return target === "monthly" ? 
        (
            setMonthly(true),
            setYearly(false),
            setBespoke(67),
            setFullPackage(99),
            setECommerce(117),
            setPaymentType('monthly')
        )
        : target === "ONE-TIME PAYMENT" ? 
        (
            setMonthly(false),
            setYearly(true),
            setBespoke(599),
            setFullPackage(999),
            setECommerce(1200),
            setPaymentType('ONE-TIME PAYMENT')
        )
        : null
    }
    
    return (
        <div className="prices" id="prices">
            <div onClick={() => setOpenForm(false)} className={`${openForm && "overlay"}`}></div>
            <div className="payment__option">
                <Button onClick={paymentOptionHandler} className={`${monthly && "active"}`}>monthly</Button>
                <Button onClick={paymentOptionHandler} className={`${yearly && "active"}`}>ONE-TIME PAYMENT</Button>
            </div>
            <div className="prices__container">
                <ContactModal currentPackage={currentPackage} openFormProp={openForm} closeFormProp={CloseFormHandler} />
                <div className="content">
                    <div className="title">
                        <h2>Bespoke</h2>
                    </div>
                    <div className="price">
                    <h2> <span className="money__sign">£</span><span className="amount">{bespoke}</span></h2>
                    <p className="type__payment">{paymentType}</p>
                    </div>
                    <div className="body">
                        <ul>
                            <div className="ul__div" > <Check /> <li>responsive desing </li> </div>
                            <div className="ul__div" > <Check /> <li>Bespoke 5 page Website Design</li> </div>
                            <div className="ul__div" > <Check /> <li>1 Year Free Domain & Hosting (worth £65+)</li> </div>
                            <div className="ul__div" > <Check /> <li>100% Ownership</li> </div>
                            <div className="ul__div" > <Check /> 
                            <li> Foundation of SEO as standard</li> </div>
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
                    <h2> <span className="from">From</span> <span className="money__sign">£</span><span className="amount">{fullPackage}</span></h2>
                    <p className="type__payment">{paymentType}</p>
                    </div>
                    <div className="body">
                        <ul>
                        <div className="ul__div" > <Check /> <li>responsive desing </li> </div>
                            <div className="ul__div" > <Check /> <li>Unlimited pages Website Design</li> </div>
                            <div className="ul__div" > <Check /> <li>1 Year Free Domain & Hosting (worth £65+)</li> </div>
                            <div className="ul__div" > <Check /> <li>100% Ownership</li> </div>
                            <div className="ul__div" > <Check /> <li>Free HTTPS Encription</li> </div>
                            <div className="ul__div" > <Check /> <li> Foundation of SEO as standard</li> </div>
                            <li className="grey__overlay">Google My Business Set Up</li>
                            <li className="grey__overlay">Website Copy Writing (Upto 4000 words)</li>
                            <li className="grey__overlay">Google Maps</li>
                            <div className="ul__div" > <Check /> <li>Contact form</li> </div>
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
                    <h2> <span className="from">From</span> <span className="money__sign">£</span><span className="amount">{eCommerce}</span></h2>
                    <p className="type__payment">{paymentType}</p>
                    </div>
                    <div className="body">
                        <ul>
                            <div className="ul__div" > <Check /> <li>responsive desing </li> </div>
                            <div className="ul__div" > <Check /> <li>Unlimited pages Website Design</li> </div>
                            <div className="ul__div" > <Check /> <li>1 Year Free Domain & Hosting (worth £65+)</li> </div>
                            <div className="ul__div" > <Check /> <li>100% Ownership</li> </div>
                            <div className="ul__div" > <Check /> 
                            <li> Foundation of SEO as standard</li> </div>
                            <div className="ul__div" > <Check /> <li>Free HTTPS Encription</li> </div>
                            <div className="ul__div" > <Check /> <li>Google My Business Set Up</li> </div>
                            <div className="ul__div" > <Check /> <li>Website Copy Writing (Upto 4000 words)</li> </div>
                            <div className="ul__div" > <Check /> <li>Google Maps</li> </div>
                            <div className="ul__div" > <Check /> <li>Contact form</li> </div>
                            <div className="ul__div" > <Check /> <li>payment gateway</li> </div>                       
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
