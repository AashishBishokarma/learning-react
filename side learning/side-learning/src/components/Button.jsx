import React from "react"

const Button = (props) => {
  return(
  <>
    {props.children}
    <button onClick={props.handleKey}>
    {props.text}
    </button>
    
    </>
  )
}

export default Button;