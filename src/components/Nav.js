import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import {Menu, Close, Home, ContactPhone, SettingsApplications, LocalOffer, Feedback, ChildFriendlyTwoTone} from '@material-ui/icons'
import {Button} from '@material-ui/core'

import './css/nav.css'
const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [navScroll, setNavScroll] = useState(false)

    useEffect(()=> {
        const scroll = () => setNavScroll(true)
        window.addEventListener('scroll', scroll)
        return () => {
            window.removeEventListener('scroll', scroll)
        }
    }, [])

    const scrollPositionHandler = () => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY === 0){
                setNavScroll(false)
            }
        })
    }
    scrollPositionHandler()

    return (
        <div className={`nav ${navScroll && "nav__scroll"}`} id="nav">
            <div onClick={()=> setOpenMenu(false)} className={`${openMenu && "nav__overlay"}`}></div>
            <div onClick={()=> setOpenMenu(true)} className={`nav__small ${openMenu && "hideMenu"}`}>
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
                           <div className="ul__div " > <Home className="ul__icon" /> <Link to="landing" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>home </li></Link> </div>
                           <div className="ul__div " > <SettingsApplications className="ul__icon" /> <Link to="services" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>services </li></Link> </div>
                           <div className="ul__div " > <Feedback className="ul__icon" /> <Link to="feedback" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>testimonials </li></Link> </div>
                           <div className="ul__div " > <LocalOffer className="ul__icon" /> <Link to="prices" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>prices </li></Link> </div>
                           <div className="ul__div " > <ContactPhone className="ul__icon" /> <Link to="contact" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>contact us</li></Link> </div>
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