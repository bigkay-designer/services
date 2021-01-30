import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import { Person,People, Email, Phone, Send, AttachMoney } from '@material-ui/icons'

import '../css/contact.css'
function Contact({option}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="contact">
            <div className={`contact__container ${!option && "main__contact"}`} >
                <form action="#">
                    <div className="input__divs">
                        <Person className="icons" /><input className="input1" type="text" onChange={e => setFirstName(e.target.value)} value={firstName} required placeholder="First name" />
                    </div>
                    <div className="input__divs">
                        <People className="icons" /><input className="input1" type="text" onChange={e => setLastName(e.target.value)} value={lastName} required placeholder="Last name" />
                    </div>
                    <div className="input__divs">
                        <Email className="icons" /><input className="input3" type="email" onChange={e => setEmail(e.target.value)} value={email} required placeholder="Emai ddress" />
                    </div>
                    <div className="input__divs">
                        <Phone className="icons" /><input className="input4" type="number" onChange={e => setPassword(e.target.value)}value={password} required placeholder="Phone" />
                    </div>
                    <div className={`input__divs hide__select ${option && "show__select"}`}>
                        <AttachMoney className="icons" />
                        <select  name="budget" required>
                            <option value="">Please Select (Budget)</option>
                            <option value="price1">£500 - £1500</option>
                            <option value="price2">£2000 - £5000</option>
                            <option value="price3">£5000 or above</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className={`input__divs ${option && "hide__service__select"}`}>
                        <AttachMoney className="icons" />
                        <select  name="package" required>
                            <option value="">Please Select (Service)</option>
                            <option value="pachage1">Custom Design</option>
                            <option value="package2">Bespoke development Package</option>
                            <option value="package3">E-Commerce</option>
                            <option value="package3">Other</option>
                        </select>
                    </div>
                    <div className="input__divs">
                        <Send /><Button type="submit">Submit</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
