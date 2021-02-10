import React, {useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import {Button} from '@material-ui/core'
import axios from '../axios'
import { Person,People, Email, Phone, Send, AttachMoney } from '@material-ui/icons'

import '../css/contact.css'
function Contact({option, serviceTitle}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')
    const [budget, setBudget] = useState('')
    // const [verify, setVerify] = useState(false)
    //error handling
    const [errorMsg, setErrorMsg] = useState('')
    const [error, setError] = useState(false)
    const [successMsg, setSucessMsg] = useState('')
    const [success, setSuccess] = useState('')
    const recapcheHandler = (value) =>{
        console.log('Captcha value', value)
    }
    const onFormSubmit  = (e) => {
        e.preventDefault()
        const msg = {
            firstName,
            lastName,
            email,
            phone,
            service,
            budget
        }
        axios.post(`/${process.env.REACT_APP_URL_HASH}/api/contact`, msg)
        .then((res)=>{
            // console.log(res)
            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            //error handling
            setSucessMsg(res.data.msg)
            setSuccess(true)
            setTimeout(()=>{
                setSucessMsg('')
                setSuccess(false)
            }, 5000)
        })
        .catch(err => {
            console.log(err.response)
            setErrorMsg('Sorry, something went wrong, please contact info@bkdesignplus.com')
            setError(true)
            setTimeout(()=>{
                setErrorMsg('')
                setError(false)
            }, 5000)
        })

    }
    return (
        <div className="contact" id="contact">
                    {
                        error || success ?
                            <div className={`flash ${success && "success"} ${error && "error"}`}>
                                <h3>{errorMsg}</h3> 
                                <h3>{successMsg}</h3> 
                            </div>
                        :null
                    }
            <div className={`contact__container ${!option && "main__contact"}`} >
                <form onSubmit={onFormSubmit}>
                    <div className="input__divs">
                        <Person className="icons" /><input className="input1" name="firstName" type="text" onChange={e => setFirstName(e.target.value)} value={firstName} required placeholder="First name" />
                    </div>
                    <div className="input__divs">
                        <People className="icons" /><input className="input1" name="lastName" type="text" onChange={e => setLastName(e.target.value)} value={lastName} required placeholder="Last name" />
                    </div>
                    <div className="input__divs">
                        <Email className="icons" /><input className="input3" name="email" type="email" onChange={e => setEmail(e.target.value)} value={email} required placeholder="Emai ddress" />
                    </div>
                    <div className="input__divs">
                        <Phone className="icons" /><input className="input4" name="phone" type="number" onChange={e => setPhone(e.target.value)} value={phone} required placeholder="Phone" />
                    </div>
                    <div className={`input__divs`}>
                        <AttachMoney className="icons" />
                        <select  name="budget" onChange={(e) => setBudget(e.target.value)} required >
                            <option value="">Please Select (Budget)</option>
                            <option value="£500 - £1500">£500 - £1500</option>
                            <option value="£2000 - £5000">£2000 - £5000</option>
                            <option value="£5000 or above">£5000 or above</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={`input__divs `}>
                        <AttachMoney className="icons" />
                        <select  name="service" onChange={(e) => setService(e.target.value)} required>
                            {
                                serviceTitle ? 
                                <>
                                    <option value={serviceTitle}>{serviceTitle}</option>
                                    <option disabled value="Custom Design">Custom Design</option>
                                    <option disabled value="full package">Full Package</option>
                                    <option disabled value="E-commerce">E-Commerce</option>
                                    <option disabled value="other">Other</option>
                                </>
                                :
                                <>
                                    <option value="">Please Select (Service)</option>
                                    <option value="Custom Design">Custom Design</option>
                                    <option value="full package">Full Package</option>
                                    <option value="E-commerce">E-Commerce</option>
                                    <option value="other">Other</option>
                                </>
                            }
                        </select>
                    </div>
                    <div className="input__divs">
                        <Send /><Button type="submit">Submit</Button>
                    </div>
                    <div className="verify">
                    <ReCAPTCHA
                        sitekey="6LeH9E4aAAAAACgNaI9jWwaXZvyb116oYxiLTG3e"
                        onChange={recapcheHandler}
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
