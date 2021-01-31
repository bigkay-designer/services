import React, {useState, useEffect, useRef} from 'react'
import {Button} from '@material-ui/core'
import {NavigateNext, NavigateBefore} from '@material-ui/icons'
import serviceJson from '../pages/servicesJson.json'

import '../css/services.css'
function Services() {
    const [serviceData, setServiceData] = useState([])
    const refElement = useRef(null)

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
            <div className="services__container" ref={refElement}>
                <div className="services__body">
                    {serviceData.map(data => (
                        <div key={data.bodyTitle} className="content">
                            <div className="content__body">
                            <img src={data.image} alt="image"/>
                            <h3> {data.bodyTitle} </h3>
                            <p> {data.bodyContent} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="services__btn">
                <div onClick={() => scrollLeftHandler(-600)} className="btn">
                    <NavigateBefore />
                    <Button className="prev">prev</Button>
                </div>
                <div onClick={() => scrollRightHandler(600)} className="btn">
                    <Button id="test" className="next">next</Button>
                    <NavigateNext />
                </div>
            </div>
        </div>
    )
}

export default Services
