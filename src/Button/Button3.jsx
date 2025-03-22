import React from 'react'
import './Button3.css'
import { RxArrowTopRight } from "react-icons/rx";
const Button3 = ({text}) => {
  return (
    <button className='button3'>
      {text} <RxArrowTopRight/>
    </button>
  )
}

export default Button3
