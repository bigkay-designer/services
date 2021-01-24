import React, {useState} from 'react'
import {Menu, Close, Home, ContactPhone, SettingsApplications, LocalOffer} from '@material-ui/icons'
import {Button} from '@material-ui/core'

import './css/nav.css'
const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div className="nav">
            <div onClick={()=> setOpenMenu(false)} className={`${openMenu && "nav__overlay"}`}></div>
            <div onClick={()=> setOpenMenu(true)} className="nav__small">
                <Menu className="menu__icon" />
            </div>
            <div className={`nav__container `}>
                <div className="nav__logo">
                    <h2>BK design</h2>
                </div>
                <nav className={`nav__links ${openMenu && "display__nav"} `}>
                    <div onClick={()=> setOpenMenu(false)} className="nav__close">
                        <Close className="nav__icon" />
                    </div>
                    <div className="links">
                        <ul>
                           <div className="ul__div " > <Home className="ul__icon" /> <li>home</li> </div>
                           <div className="ul__div " > <SettingsApplications className="ul__icon" /> <li>services</li> </div>
                           <div className="ul__div " > <LocalOffer className="ul__icon" /> <li>pricing</li> </div>
                           <div className="ul__div " > <ContactPhone className="ul__icon" /> <li>contact us</li> </div>
                        </ul>
                        <div className="btn">
                            <Button className="btn__icon">Get A Quote</Button>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Nav