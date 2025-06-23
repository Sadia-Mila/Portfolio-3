import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <button className={`bg-primary uppercase rounded-[50px] ${className}`}>{btnText}</button>
  )
}

export default Button
