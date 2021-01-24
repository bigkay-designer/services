import React from 'react'
import {EmojiEmotions} from '@material-ui/icons'
import '../css/feedback.css'
function FeedBack() {
    return (
        <div className="feedback">
            <div className="feedback__container">
                <div className="title">
                    <h2>Testimonials</h2>
                </div>
                <div className="content">
                    <EmojiEmotions className="icon" />
                    <h2>name</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus est fugit sit excepturi aliquam expedita voluptate officiis dignissimos fugiat dolor?</p>
                </div>
            </div>
        </div>
    )
}

export default FeedBack
