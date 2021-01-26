import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import { Person,People, Email, Phone, Send } from '@material-ui/icons'

import '../css/contact.css'
function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="contact" id="contact">
            <div className="contact__container">
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
                    <div className="input__divs">
                        <Send /><Button type="submit">Submit</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
