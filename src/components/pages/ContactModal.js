import React from 'react'
import {Close} from '@material-ui/icons'
import Contact from './Contact'

import '../css/contactModal.css'
function ContactModal({currentPackage, openFormProp, closeFormProp}) {


    return (
        <div className={`hide__form ${openFormProp && "modal__form"}`}>
            <div onClick={closeFormProp} className="close">
                <Close className="icon" />
            </div>
            <div className="title">
                <h2>{currentPackage}</h2>
            </div>
            <Contact serviceTitle={currentPackage}  />
        </div>
    )
}

export default ContactModal
