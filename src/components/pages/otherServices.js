import React from 'react'
import image from '../images/vector_ser.png'
import otherServicesJson from './otherServicesJson.json'
import '../css/otherServices.css'
function otherServices() {
    return (
        <div className="otherServices">
                <div className="bg__div"></div>
            <div className="otherservices__container">
                    {
                        otherServicesJson.map(data => (
                            <div className="content" key={data.title}>
                                <div className="content__body">
                                    <img src={data.image} alt=""/>
                                    <h2>{data.title}</h2>
                                    <p>{data.para}</p>
                                </div>
                             </div>
                        ))
                    }
            </div>
        </div>
    )
}

export default otherServices
