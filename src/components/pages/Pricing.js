import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import {Check} from '@material-ui/icons'
import ContactModal from './ContactModal'

import '../css/pricing.css'
function Pricing() {
    const [openForm, setOpenForm] = useState(false)
    const [currentPackage, setCurrentPachage] = useState("")
    const [bespoke, setBespoke] = useState(799)
    const [fullPackage, setFullPackage] = useState(1400)
    const [eCommerce, setECommerce] = useState(2000)
    const [monthlyPayment, setMonthlyPayment] = useState('')
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

        return target === "3 monthly payments" ? 
        (
            setMonthly(true),
            setYearly(false),
            setBespoke(266),
            setFullPackage(467),
            setECommerce(667),
            setPaymentType('3 monthly payments'),
            setMonthlyPayment(' 3 x ')
        )
        : target === "ONE-TIME PAYMENT" ? 
        (
            setMonthly(false),
            setYearly(true),
            setBespoke(799),
            setFullPackage(1400),
            setECommerce(2000),
            setPaymentType('ONE-TIME PAYMENT'),
            setMonthlyPayment('')
        )
        : null
    }
    
    return (
        <div className="prices" id="prices">
            <div onClick={() => setOpenForm(false)} className={`${openForm && "overlay"}`}></div>
            <div className="payment__option">
                <Button onClick={paymentOptionHandler} className={`${monthly && "active"}`}>3 monthly payments</Button>
                <Button onClick={paymentOptionHandler} className={`${yearly && "active"}`}>ONE-TIME PAYMENT</Button>
            </div>
            <div className="into__pricing">
                <p>The price of each website varies and it's defined by the <strong>time the project will take</strong> and the <strong>complexity of work</strong>, so these prices are meant as an estimate for the average specification.</p>
                <p>We prefer to work on an agreed fixed price instead of an hourly, but if needed we can negotiate an hourly rate. <strong>Also, You can spread the cost over 3 months.</strong> </p>
            </div>

            <div className="prices__container">
                <ContactModal currentPackage={currentPackage} openFormProp={openForm} closeFormProp={CloseFormHandler} />
                <div className="content">
                    <div className="title">
                        <h2>Basic Package</h2>
                    </div>
                    <div className="price">
                    <h2> <span className="from">From</span> <span>{monthlyPayment}</span> <span className="money__sign">£</span><span className="amount">{bespoke}</span></h2>
                    <p className="type__payment">{paymentType}</p>
                    </div>
                    <div className="body">
                        <ul>
                            <div className="ul__div" > <Check /> <li>responsive design </li> </div>
                            <div className="ul__div" > <Check /> <li>Bespoke Website Design</li> </div>
                            <div className="ul__div" > <Check /> <li>1 Year Free Domain (worth £35+)</li> </div>
                            <div className="ul__div" > <Check /> <li>100% Ownership</li> </div>
                            <div className="ul__div" > <Check /> 
                            <li> Super Performant</li> </div>
                            <div className="ul__div" > <Check /> 
                            <li> Hosting £20/mo</li> </div>
                            <li className="grey__overlay">Free HTTPS Encryption</li>
                            <li className="grey__overlay">Google My Business Set-Up</li>
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
                        <h2>Business Site</h2>
                    </div>
                    <div className="price">
                    <h2> <span className="from">From</span><span>{monthlyPayment}</span> <span className="money__sign">£</span><span className="amount">{fullPackage}</span></h2>
                    <p className="type__payment">{paymentType}</p>
                    </div>
                    <div className="body">
                        <ul>
                        <div className="ul__div" > <Check /> <li>responsive design </li> </div>
                            <div className="ul__div" > <Check /> <li>Bespoke Website Design</li> </div>
                            <div className="ul__div" > <Check /> <li>1 Year Free Domain (worth £35+)</li> </div>
                            <div className="ul__div" > <Check /> <li>100% Ownership</li> </div>
                            <div className="ul__div" > <Check /> <li>Free HTTPS Encryption</li> </div>
                            <div className="ul__div" > <Check /> <li> Foundation of SEO as standard</li> </div>
                            <div className="ul__div" > <Check /> <li>Free 3 months hosting, then £25/mo</li> </div>
                            <div className="ul__div" > <Check /> 
                            <li> Super Performant</li> </div>
                            <li className="grey__overlay">Google My Business Set-Up</li>
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
                        <h2>E-Commerce</h2>
                    </div>
                    <div className="price">
                    <h2> <span className="from">From</span> <span>{monthlyPayment}</span> <span className="money__sign">£</span><span className="amount">{eCommerce}</span></h2>
                    <p className="type__payment">{paymentType}</p>
                    </div>
                    <div className="body">
                        <ul>
                            <div className="ul__div" > <Check /> <li>responsive design </li> </div>
                            <div className="ul__div" > <Check /> <li>Bespoke Website Design</li> </div>
                            <div className="ul__div" > <Check /> <li>1 Year Free Domain (worth £35+)</li> </div>
                            <div className="ul__div" > <Check /> <li>100% Ownership</li> </div>
                            <div className="ul__div" > <Check /> 
                            <li> Foundation of SEO as standard</li> </div>
                            <div className="ul__div" > <Check /> <li>Free HTTPS Encryption</li> </div>
                            <div className="ul__div" > <Check /> <li>Google My Business Set-Up</li> </div>
                            <div className="ul__div" > <Check /> <li>Free 3 months hosting, then £35/mo</li> </div>
                            <div className="ul__div" > <Check /> 
                            <li> Super Performant</li> </div>
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
