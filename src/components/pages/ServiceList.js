import React, {useState, useEffect, useRef} from 'react'
import {Button} from '@material-ui/core'
import {NavigateNext, NavigateBefore} from '@material-ui/icons'
import serviceListJson from '../pages/ServiceListJson.json'
import webDesingImg from '../images/web-design.png'
import webDevImg from '../images/web-dev.png'
import eCommerceImg from '../images/e-commerce.png'
import hostingImg from '../images/hosting.png'
import emailMrkImg from '../images/email-mrk.png'
import '../css/services.css'
function Services() {
    const [serviceData, setServiceData] = useState([])
    const refElement = useRef(null)
    
    useEffect(()=>{
        const importedImage = [webDesingImg, webDevImg, eCommerceImg, hostingImg, emailMrkImg]
        for(let i =0; i < serviceListJson.length; i++){
            serviceListJson[i].image = importedImage[i]
        }
    }, [])

    useEffect(()=>{
        setServiceData(serviceListJson)
    }, [])

    const scrollRightHandler = (moveLeft) => {
        refElement.current.scrollLeft += moveLeft

    };
    const scrollLeftHandler = (moveLeft) => {
        refElement.current.scrollLeft += moveLeft

    };
    return (
        <div className="services" id="services">
            <div className="services__container" ref={refElement}>
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
            <div className="services__btn service__list__btn">
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
