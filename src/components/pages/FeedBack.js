import React from 'react'
import {EmojiEmotions} from '@material-ui/icons'
import '../css/feedback.css'
function FeedBack() {
    const feedbacks = [
        {
            name : 'name 1',
            para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus est fugit sit excepturi aliquam expedita voluptate officiis dignissimos fugiat dolor?'
        },
        {
            name : 'name 2',
            para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus est fugit sit excepturi aliquam expedita voluptate officiis dignissimos fugiat dolor?'
        },
        {
            name : 'name 3',
            para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus est fugit sit excepturi aliquam expedita voluptate officiis dignissimos fugiat dolor?'
        },
        {
            name : 'name 4',
            para: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus est fugit sit excepturi aliquam expedita voluptate officiis dignissimos fugiat dolor?'
        },
    ]

    console.log(feedbacks[1].name)
    
    return (
        <div className="feedback" id="feedback">
            <div className="feedback__container">
                {
                    feedbacks.map(cards => (
                        <div className="content">
                            <EmojiEmotions className="icon" />
                            <h2>{cards.name}</h2>
                            <p>{cards.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeedBack
