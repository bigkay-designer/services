import React, {useState, useRef} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import {Button} from '@material-ui/core'
import axios from '../axios'
import { Person,People, Email, Phone, Send, AttachMoney, SettingsApplications } from '@material-ui/icons'

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
    const reRef = useRef()

    let recaptchaKey = process.env.REACT_APP_RECAPTHA_KEY
    const onFormSubmit  = async (e) => {
        e.preventDefault()

        const token = await reRef.current.executeAsync()
        reRef.current.reset()
        
        const msg = {
            firstName,
            lastName,
            email,
            phone,
            service,
            budget,
            token
        }
        axios.post(`/${process.env.REACT_APP_URL_HASH}/api/contact`, msg)
        .then((res)=>{
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
            setErrorMsg(err.response.data.msg)
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
                        <Email className="icons" /><input className="input3" name="email" type="email" onChange={e => setEmail(e.target.value)} value={email} required placeholder="Email address" />
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
                        <SettingsApplications className="icons" />
                        <select  name="service" onChange={(e) => setService(e.target.value)} required>
                            {
                                serviceTitle ? 
                                <>
                                    <option value={serviceTitle}>{serviceTitle}</option>
                                    <option disabled value="Basic Package">Basic Package</option>
                                    <option disabled value="Business Site">Business Site</option>
                                    <option disabled value="E-commerce">E-Commerce</option>
                                    <option disabled value="other">Other</option>
                                </>
                                :
                                <>
                                    <option value="">Please Select (Service)</option>
                                    <option value="Basic Package">Basic Package</option>
                                    <option value="Business Site">Business Site</option>
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
                        sitekey={recaptchaKey}
                        size="invisible"
                        ref={reRef}
                        />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
