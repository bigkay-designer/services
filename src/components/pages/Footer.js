import React from 'react'
import {Link} from 'react-scroll'
import {Home, SettingsApplications, LocalOffer, LocationOn, Phone, } from '@material-ui/icons'
import {LinkedIn, Email, Instagram, Facebook} from '@material-ui/icons'
import '../css/footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
            <div className="links">
            <ul>
                <div className="ul__div " > <Home className="ul__icon" /> <Link to="landing" smooth={true} duration={1000}><li >home </li></Link> </div>
                <div className="ul__div " > <SettingsApplications className="ul__icon" /> <Link to="services" smooth={true} duration={1000}><li >services </li></Link> </div>
                <div className="ul__div " > <LocalOffer className="ul__icon" /> <Link to="prices" smooth={true} duration={1000}><li >prices </li></Link> </div>
            </ul>
            </div>
            <div className="contact__info">
                <div className="contact__info__div"><LocationOn className="icons" /><p>United Kindom, Luton</p> </div>
                <div className="contact__info__div"><Email className="icons" /><p>ibrahimkhalid478@gmail.com</p> </div>
                <div className="contact__info__div"><Phone className="icons" /><p>07494498323</p> </div>
            </div>
            <div className="socials">
                <h3>Follow us</h3>
                <div className="icons">
                    <LinkedIn />
                    <Instagram />
                    <Facebook />
                </div>
            </div>
            <div className="copyright">
                <p>copyright ©2021 bkdesigner </p>
            </div>
            </div>
        </div>
    )
}

export default Footer
