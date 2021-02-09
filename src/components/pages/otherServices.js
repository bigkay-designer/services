import React from 'react'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import otherServicesJson from './otherServicesJson.json'
import '../css/otherServices.css'
function OtherServices() {
    const importedImages = [img1, img2, img3, img4]

    const imageLoopFunc = () => {
        for(let i = 0; i < otherServicesJson.length; i++){
          otherServicesJson[i].image = importedImages[i] 
        }
    }

    imageLoopFunc()
    
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

export default OtherServices
