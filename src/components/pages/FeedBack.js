import React, {useState, useRef} from 'react'
import {EmojiEmotions, NavigateNext, NavigateBefore, Feedback} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import Feedbacks from '../pages/feebackJson.json'
import '../css/feedback.css'
function FeedBack() {
    const [count, setCount] = useState(0)
    const [currentCard, setCurrentCard] = useState(Feedbacks)
    const refElement = useRef(null)
   
    const scrollHandler =  (move) => {
        refElement.current.scrollLeft += move
    }
    return (
        <div className="feedback__main">
            <div className="feedback" ref={refElement} id="feedback">
                <div className="feedback__container">
                    {
                        currentCard.map(card => (
                            <div className="content" key={card.name}>
                                <EmojiEmotions className="icon" />
                                <h2>{card.name}</h2>
                                <q>{card.para}</q>
                            </div>
                        ))

                    }
          
                </div>
            </div>
            <div className="feedback__btn">
                <div onClick={() => scrollHandler(-260)} className="btn">
                    <NavigateBefore />
                    <Button className="prev">prev</Button>
                </div>
                <div onClick={() => scrollHandler(260)} className="btn">
                    <Button className="next">next</Button>
                    <NavigateNext />
                </div>
            </div>
        </div>
    )
}

export default FeedBack
