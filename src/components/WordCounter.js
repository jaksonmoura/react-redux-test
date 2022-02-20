import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

const WordCounter = () => {
    const [sentence, setSentence] = useState("")

    let wordsCount = useSelector((state) => state.wordCounter.counter);
    const dispatch = useDispatch();
    // TODO: make it work with bindActionCreators
    // const { count } = bindActionCreators(wordCounterActions, dispatch2);

    const handleChange = (event) => {
        setSentence(event.target.value)
        dispatch({type: 'count/words', payload: sentence})
    }

    return(
        <div>
            <h2>Words in sentence: {wordsCount}</h2>
            <input type="text" value={sentence} onChange={(e) => handleChange(e) } />
            <button onClick={() => dispatch({type: 'count/words', payload: sentence})}>Count</button>
        </div>
    )
}

export default WordCounter;