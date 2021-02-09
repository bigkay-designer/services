import React from 'react'
import image from '../images/Privacy-Policy-Banner-New.png'
import '../css/privacyPolicy.css'
function privacyPolicy() {
    return (
        <div className="policy">
            <div className="policy__container">
                <div className="img">
                    <img src={image} alt=""/>
                </div>
                <div className="body">
                    <p>We are keen to protect your privacy and it is important that you should be able to use our web-site without having your privacy breached in any way. It is necessary for us to collect information about you if you request the use of other services or more information on particular products.</p>
                    <p>It is our policy to only collect such information about you as to facilitate the provision of the required service and we will not collect any unnecessary data.</p>
                    <p>Your information will only be provided to the third party from whom you have requested further information to enable them to provide the information that you have specifically asked for and consented to.</p>
                    <p>Please ensure that you only enter your own details. You may not give details of another individual without first obtaining their consent.</p>
                    <p>This web site has links from other third party sites and you may be referred to us from one such third party site. This may happen where you have clicked on a link to this site from another site. Where this happens we may be under a contractual obligation to the third party site to share data on our referred users with that site. Where this happens we may supply details of our users who have been referred from that site and who have requested further information to the third party site.</p>
                </div>
            </div>
        </div>
    )
}

export default privacyPolicy
