import React from 'react'
import image from '../images/vector_ser.png'
import '../css/otherServices.css'
function otherServices() {
    return (
        <div className="otherServices">
            <div className="otherservices__container">
                <div className="bg__div"></div>
                <div className="otherServices__bg">
                    <div className="img">
                        <img src={image} alt="img"/>
                    </div>
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
    )
}

export default otherServices
