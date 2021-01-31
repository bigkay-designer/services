import React from 'react'
import {Phone, HourglassEmpty, AssignmentTurnedIn, DynamicFeed} from '@material-ui/icons'
import image from '../images/vector_ser.png'
import '../css/otherServices.css'
function otherServices() {
    return (
        <div className="otherServices">
                <div className="bg__div"></div>
            <div className="otherservices__container">
                <div className="content">
                    <Phone className="icon" />
                    <div className="content__body">
                        <h2>Wire frame</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iste eos veniam aut mollitia.</p>
                    </div>
                </div>
                <div className="content">
                    <HourglassEmpty className="icon" />
                    <div className="content__body">
                        <h2>web desing</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iste eos veniam aut mollitia.</p>
                    </div>
                </div>
                <div className="content">
                    <AssignmentTurnedIn className="icon" />
                    <div className="content__body">
                        <h2>development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iste eos veniam aut mollitia.</p>
                    </div>
                </div>
                <div className="content">
                    <DynamicFeed className="icon" />
                    <div className="content__body">
                        <h2>final delivery</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum iste eos veniam aut mollitia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default otherServices
