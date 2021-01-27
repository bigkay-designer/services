import React, {useState} from 'react'
import {EmojiEmotions, NavigateNext, NavigateBefore, Feedback} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import Feedbacks from '../pages/feebackJson.json'
import '../css/feedback.css'
function FeedBack() {
    const [count, setCount] = useState(0)
    const [currentCard, setCurrentCard] = useState(Feedbacks)

    const nextHandler = (e) => {
        e.preventDefault()
        if(count < (currentCard.length - 1)){
            setCount(count + 1)
        }
    }
    const prevHandler = (e) => {
        e.preventDefault()
        if(count === 0){
            setCount(0)
        }else{
            setCount(count - 1)
        }
    }
    
    return (
        <div className="feedback__main">
            <div className="feedback" id="feedback">
                <div className="feedback__container">
                    {
                        // currentCard.map(cards => (
                            <div className="content">
                                <EmojiEmotions className="icon" />
                                <h2>{currentCard[count].name}</h2>
                                <p>{currentCard[count].para}</p>
                            </div>
                        // ))
                    }
                </div>
            </div>
            <div className="feedback__btn">
                <div onClick={prevHandler} className="btn">
                    <NavigateBefore />
                    <Button className="prev">prev</Button>
                </div>
                <div onClick={nextHandler} className="btn">
                    <Button className="next">next</Button>
                    <NavigateNext />
                </div>
            </div>
        </div>
    )
}

export default FeedBack
