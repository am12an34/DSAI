import React from 'react'
import './Navbar.css'
import Button1 from '../Button/Button1'
import { MdModeEdit } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className='navbar'>
      <motion.h2 initial={{ x: 0 }} whileHover={{ x: 20,  dur:1 }}>DSAI.</motion.h2>
      <ul className='nav-items'>
        <li className='nav-item'>home</li>
        <li className='nav-item'>events</li>
        <li className='nav-item'>invoations</li>
        <li className='nav-item'>dsai squad</li>
        <li className='nav-item'>about club</li>
      </ul>
      <Button1 text={'Join Now'} Icon={MdModeEdit} HoverIcon={FaLocationArrow} />
    </div>
  )
}
export default Navbar;
