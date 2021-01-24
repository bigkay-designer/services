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
        <div className="services">
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
                <div className="otherServices">
                    <div className="otherServices__bg">
                        <div className="img"></div>
                    </div>
                    <div className="content">
                        <div className="content__body">
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <ul>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iste?</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iste?</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iste?</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, iste?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
