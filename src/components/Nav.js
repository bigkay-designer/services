import React, {useState, useEffect} from 'react'
import {Link} from 'react-scroll'
import {Link as PageLink} from 'react-router-dom'
import {Menu, Close, Home, ContactPhone, SettingsApplications, LocalOffer, LibraryBooks} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import logo from './images/logo.png'
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
        <div className={`nav ${navScroll && "nav__scroll"} ${window.location.pathname !== '/' && "nav__bg__color"}`} id="nav">
            <div onClick={() => setOpenForm(false)} className={`${openForm && "overlay"}`}></div>

            <div onClick={()=> setOpenMenu(false)} className={`${openMenu && "nav__overlay"}`}></div>
            <div onClick={()=> setOpenMenu(true)} className={`nav__small ${openMenu && "hideMenu"}`}>
                <Menu className={`menu__icon ${navScroll && "scroll__color"}`} />
            </div>
            <div className={`nav__container `}>
             <ContactModal openFormProp={openForm} closeFormProp={CloseFormHandler} />

                <div onClick="" className="nav__logo">
                    <Link to="App" smooth={true} duration={1000}>
                        <PageLink to="/">
                            <img src={logo} alt="logo"/>
                            <h2 className={`${navScroll && "scroll__color"}`}>BK <br/> <span className="sub__name">DesignPlus</span></h2>
                        </PageLink>
                    </Link>
                </div>
                <nav className={`nav__links ${openMenu && "display__nav"} `}>
                    <div onClick={()=> setOpenMenu(false)} className="nav__close">
                        <Close className="nav__icon" />
                    </div>
                    <div className="links">
                        <ul className={`${navScroll && "scroll__color"}`}>
                        <Link onClick={()=> setOpenMenu(false)} to="App" smooth={true} duration={1000}> <div className="ul__div " > <Home className="ul__icon" /> <PageLink to="/"><li >home </li></PageLink>  </div> </Link>
                        <Link onClick={()=> setOpenMenu(false)} to="services" smooth={true} duration={1000}><div className="ul__div " > <SettingsApplications className="ul__icon" /> <PageLink to="/#services"><li >services </li></PageLink>  </div> </Link>
                        <Link onClick={()=> setOpenMenu(false)} to="projects" smooth={true} duration={1000}><div className="ul__div " > <LibraryBooks className="ul__icon" /><PageLink to="/#projects"><li >portfolio </li></PageLink>  </div> </Link>
                        <Link onClick={()=> setOpenMenu(false)} to="prices" smooth={true} duration={1000}><div className="ul__div " > <LocalOffer className="ul__icon" /> <PageLink to="/#services"><li >prices </li></PageLink>  </div> </Link>
                        <Link onClick={()=> setOpenMenu(false)} to="contact__id" smooth={true} duration={1000}><div className="ul__div " > <ContactPhone className="ul__icon" /><PageLink to="/#services"><li >contact us </li></PageLink>  </div> </Link>
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