import React from 'react'
import './Loader.css'
import { motion } from "framer-motion";
const Loader = () => {
    return (
        <div className='loader-section'>
            <motion.div className="loader" initial={{scale:1, opacity:0}} whileInView={{scale:1.5,opacity:1, transition:{duration:3}}}>
                <div className="box">
                    <div className="logo">
                        DSAI
                    </div>
                </div>
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
            </motion.div>
        </div>
    )
}
export default Loader;
