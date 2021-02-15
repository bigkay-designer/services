import React, {useState, useEffect, useRef} from 'react'
import {Button} from '@material-ui/core'
import {NavigateNext, NavigateBefore} from '@material-ui/icons'
import serviceJson from '../pages/servicesJson.json'
import bespokeImg from '../images/bespoke-design.png'
import mobileOptImg from '../images/mobile-opt.png'
import securityImg from "../images/security.png"
import customDevImg from '../images/custom-dev.webp'
import domainImg from '../images/free-domain.png'
import supportImg from '../images/support.png'
import '../css/services.css'
function Services() {
    const [serviceData, setServiceData] = useState([])
    const refElement = useRef(null)
    const importedImages = [bespokeImg, mobileOptImg, securityImg, customDevImg, domainImg, supportImg]

    const importedImageHandler = () => {
        for(let i = 0; i < importedImages.length; i++){
            serviceJson[i].image =  importedImages[i]
        }
    }
    importedImageHandler()


    useEffect(()=>{
        setServiceData(serviceJson)
    }, [])

    const scrollRightHandler = (moveLeft) => {
        refElement.current.scrollLeft += moveLeft

    };
    const scrollLeftHandler = (moveLeft) => {
        refElement.current.scrollLeft += moveLeft

    };


    return (
        <div className="services" id="services">
            <div className="services__container main__services__container" ref={refElement}>
                <div className="services__body">
                    {serviceData.map(data => (
                        <div key={data.bodyTitle} className="content">
                            <div className="content__body">
                            <img src={data.image} alt=""/>
                            <h3> {data.bodyTitle} </h3>
                            <p> {data.bodyContent} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="services__btn">
                <div onClick={() => scrollLeftHandler(-280)} className="btn">
                    <NavigateBefore />
                    <Button className="prev">prev</Button>
                </div>
                <div onClick={() => scrollRightHandler(280)} className="btn">
                    <Button id="test" className="next">next</Button>
                    <NavigateNext />
                </div>
            </div>
        </div>
    )
}

export default Services
