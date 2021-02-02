import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import {Menu, Close, Home, ContactPhone, SettingsApplications, LocalOffer, Feedback, LibraryBooks} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import ContactModal from './pages/ContactModal'

import './css/nav.css'
const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [navScroll, setNavScroll] = useState(false)
    const [openForm, setOpenForm] = useState(false)
    const CloseFormHandler = () => {
        setOpenForm(false)
    }
    const openFormHandler = () => {
        setOpenForm(true)
        setOpenMenu(false)
    }
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
            <div onClick={() => setOpenForm(false)} className={`${openForm && "overlay"}`}></div>

            <div onClick={()=> setOpenMenu(false)} className={`${openMenu && "nav__overlay"}`}></div>
            <div onClick={()=> setOpenMenu(true)} className={`nav__small ${openMenu && "hideMenu"}`}>
                <Menu className={`menu__icon ${navScroll && "scroll__color"}`} />
            </div>
            <div className={`nav__container `}>
             <ContactModal openFormProp={openForm} closeFormProp={CloseFormHandler} />

                <div className="nav__logo">
                    <Link to="landing" smooth={true} duration={1000}><h2 className={`${navScroll && "scroll__color"}`}>BK design</h2></Link>
                </div>
                <nav className={`nav__links ${openMenu && "display__nav"} `}>
                    <div onClick={()=> setOpenMenu(false)} className="nav__close">
                        <Close className="nav__icon" />
                    </div>
                    <div className="links">
                        <ul className={`${navScroll && "scroll__color"}`}>
                           <div className="ul__div " > <Home className="ul__icon" /> <Link to="landing" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>home </li></Link> </div>
                           <div className="ul__div " > <SettingsApplications className="ul__icon" /> <Link to="services" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>services </li></Link> </div>
                           <div className="ul__div " > <LibraryBooks className="ul__icon" /> <Link to="projects" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>Portfolio </li></Link> </div>
                           {/* <div className="ul__div " > <Feedback className="ul__icon" /> <Link to="feedback" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>testimonials </li></Link> </div> */}
                           <div className="ul__div " > <LocalOffer className="ul__icon" /> <Link to="prices" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>prices </li></Link> </div>
                           <div className="ul__div " > <ContactPhone className="ul__icon" /> <Link to="contact__id" smooth={true} duration={1000}><li onClick={()=> setOpenMenu(false)}>contact us</li></Link> </div>
                        </ul>
                        <div onClick={openFormHandler} className="btn">
                            <Button className="btn__icon">Get A Quote</Button>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Nav