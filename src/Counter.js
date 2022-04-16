import React, { useState } from 'react'
import './stylesheets/bootstrap.min.css'
import './stylesheets/style.css'

export default function Counter() {

    const [count, setCount] = useState(5)

    function incrementCount(){
      setCount(previousCount=>previousCount+1)
    }
    
    function decrementCount(){
      setCount(previousCount=>previousCount-1)
    }

    return (
        <>
        <h1>Hello Counter</h1>
        <hr/>
  
        <button className="btn btn-success" onClick={incrementCount}>Increase</button>
        <span className="text-xxl">{count}</span>
        <button className="btn btn-danger" onClick={decrementCount}>Decrease</button>
      </>
    )
}
