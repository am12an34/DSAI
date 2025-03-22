import React from 'react'
import './Button2.css'
const Button2 = ({text,onClick,border}) => {
  return (
    <button className='button2' onClick={onClick} style={border?{borderColor:'rgb(146, 146, 146)'}:{}}>
        {text}
    </button>
  )
}
export default Button2;
