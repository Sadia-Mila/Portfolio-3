import React from 'react'

const Button = ({btnText, icon1, icon2, className}) => {
  return (
    <button className={`bg-primary uppercase rounded-[50px] ${className}`}>{icon1} {btnText} {icon2}</button>
  )
}

export default Button
