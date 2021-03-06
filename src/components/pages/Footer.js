import React, {useState} from 'react'
import {Button} from '@material-ui/core'
// import {Link as PageLink} from 'react-router-dom'
import {Link} from 'react-scroll'
import axios from '../axios'
import {Home, SettingsApplications, LocalOffer, LocationOn, Phone, LibraryBooks, Security} from '@material-ui/icons'
import {LinkedIn, Email, Instagram, Twitter} from '@material-ui/icons'
import '../css/footer.css'
function Footer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [error, setError] = useState(false)
    const [successMsg, setSucessMsg] = useState('')
    const [success, setSuccess] = useState('')
    
    const formSubmitHandler = (e) =>{
        e.preventDefault()
        let newsLetter = {name, email}
        axios.post(`/${process.env.REACT_APP_URL_HASH}/api/newsletter`, newsLetter)
        .then(res => {
            setName('')
            setEmail('')
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
        <div className="footer">
            <div className="news__letter">
                    {
                        error || success ?
                            <div className={`flash ${success && "success"} ${error && "error"}`}>
                                <h3>{errorMsg}</h3> 
                                <h3>{successMsg}</h3> 
                            </div>
                        :null
                    }
                <div className="news__letter__container">
                    <div className="title">
                        <h2>Sign up to our <span>Newsletter</span></h2>
                        <p>Subscribe to receive our latest updates and offers.</p>
                        {/* <p>In subscribing your agree to these terms</p> */}
                    </div>
                    <form onSubmit={formSubmitHandler}>
                        <div className="input__div">
                            <input onChange={(e)=> setName(e.target.value)} value={name} type="text" name="name" required placeholder="Your Full Name" />
                            <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" name="email" required placeholder="Your Email" />
                        </div>
                        <Button type="submit">Sign up</Button>
                    </form>
                </div>
            </div>
            <div className="footer__container">
            <div className="wrap__div">
                <div className="links">
                <ul>
                    {
                        window.location.pathname === '/' ?
                        <>
                            <div className="ul__div " > <Home className="ul__icon" /> <Link to="landing" smooth={true} duration={1000} offset={-150}><li >home </li></Link> </div>
                            <div className="ul__div " > <SettingsApplications className="ul__icon" /> <Link to="services" smooth={true} duration={1000} offset={-150}><li >services </li></Link> </div>
                            <div className="ul__div " > <LocalOffer className="ul__icon" /> <Link to="prices" smooth={true} duration={1000} offset={-150}><li >prices </li></Link> </div>
                            <div className="ul__div " > <LibraryBooks className="ul__icon" /> <Link to="projects" smooth={true} duration={1000} offset={-150}><li >projects </li></Link> </div>
                            <div className="ul__div " > <Security className="ul__icon" /><a href="/privacy-policy"><li >Privacy </li></a></div>
                        </> :
                        <>
                            <div className="ul__div " > <Home className="ul__icon" /> <a href="/"><li >home </li></a> </div>
                            <div className="ul__div " > <SettingsApplications className="ul__icon" /> <a href="/#services"><li >services </li></a> </div>
                            <div className="ul__div " > <LocalOffer className="ul__icon" /> <a href="/#prices"><li >prices </li></a> </div>
                            <div className="ul__div " > <LibraryBooks className="ul__icon" /> <a href="/#projects"><li >projects </li></a> </div>
                            <div className="ul__div " > <Security className="ul__icon" /><a href="/privacy-policy"><li >Privacy </li></a></div>
                        </> 

                    }
                </ul>
                </div>
                <div className="contact__info">
                    <div className="contact__info__div"><LocationOn className="icons" /><p>United Kindom, Luton</p> </div>
                    <div className="contact__info__div"><Email className="icons" /> <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@bkdesignplus.com" target="_blank" rel="noreferrer"><p>info@bkdesignplus.com</p></a> </div>
                    <div className="contact__info__div"><Phone className="icons" /><p> <a href="tel:+447709784016">07709784016</a></p> </div>
                </div>
                <div className="socials">
                    <h3>Follow us</h3>
                    <div className="icons">
                        <div> <a href="https://www.linkedin.com/in/khalid-ibrahim-3b2b71201/" target="_blank" rel="noreferrer"><LinkedIn className="icon lk" /></a> </div>
                        <div> <a href="https://www.instagram.com/bkdesignplus/" target="_blank" rel="noreferrer"><Instagram className="icon ig" /></a> </div>
                        <div> <a href="https://twitter.com/bkdesignplus" target="_blank" rel="noreferrer"><Twitter className="icon fb" /> </a></div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright ©2021 <a href="https://bkdesignplus.com/">bkdesignplus</a> </p>
            </div>
            </div>
        </div>
    )
}

export default Footer
