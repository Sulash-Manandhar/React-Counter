import React, { useState } from 'react'

export default function DisplayTxt() {
    const [isHidden, setHidden] = useState(false)

    const text1="This is hidden text."
    const text2 = "This is visible text."

    function handleHide(){
        setHidden(true)
    }

    function handleDisplay(){
        setHidden(false)
    }

    return (
        <>
        <h1>Display text on the basis of hidden status</h1><hr/>
        <span> {isHidden?text1:text2} </span><br/>
        <button onClick={handleHide}>Hide</button>
        <button onClick = {handleDisplay}>Display</button>
        </>
    )
}
