import React from 'react'
import "./Button.scss";

const Button = ({children, primary}) => {

  return (
    <button className={`btn ${primary}`}>{children}
    </button>
  )
}

export default Button;