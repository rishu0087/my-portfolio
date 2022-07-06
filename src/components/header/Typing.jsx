import React from 'react'
import Typed from "react-typed"
const Typing = () => {
  return (
    <div style={{ color: "#4db5ff", fontSize: 23}}>
        <div>
           <span style={{color: "white"}}>Coding is </span>
          <Typed
            strings={[" hard", " fun", " a journey", " LIFE"]}
            typeSpeed={80}
            backSpeed={70}
            loop
          />
        </div>
      </div>
  )
}

export default Typing