import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    const handleIncrement = () => {
        setCount(count + 1);
        handleColor();
    }
    const handleDecrement = () => {
        setCount(count - 1);
        handleColor();
    }
    const handleColor = () => {
        console.log(color)
        if (count >=5 && count <= 9) {
            setColor("blue");
        }
        else if(count===10){
            setColor("red");
        }
        else {
            setColor("green");
        }
    }
  return (
    <div>
          <div className="main-container">
              <h1 style={{ color: (count < 10 && count > 4) ? "blue" : (count === 10) ? "red" : "green" }}>{count}</h1>
              <div className="btnContainer">
                <button className = "incBtn" onClick={()=>{handleIncrement()}} disabled={count === 10}>Increment</button>
                <button className = "decBtn" onClick={()=>{handleDecrement()}} disabled={count === 0}>Decrement</button>
              </div>
        </div>
    </div>
  )
}

export default Counter
