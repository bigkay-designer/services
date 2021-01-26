import React, {useState, useEffect} from 'react'
import {ScreenLockPortrait} from '@material-ui/icons'
import serviceJson from '../pages/servicesJson.json'

import '../css/services.css'
function Services() {
    const [serviceData, setServiceData] = useState([])

    useEffect(()=>{
        setServiceData(serviceJson)
    }, [])
    return (
        <div className="services" id="services">
            <div className="services__container">
                <div className="title">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, odit!</h2>
                </div>
                <div className="services__body">
                    {serviceData.map(data => (
                        <div key={data.bodyTitle} className="content">
                            <div className="icon">
                                <ScreenLockPortrait />
                            </div>
                            <div className="content__body">
                            <h3> {data.bodyTitle} </h3>
                            <p> {data.bodyContent} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
