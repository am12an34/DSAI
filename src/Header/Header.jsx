import React, { useRef, useState } from 'react'
import './Header.css'
import { SiPython} from "react-icons/si";
import { RxArrowTopRight } from "react-icons/rx";
import assets from "../Assets/Assets";
import Moving from '../components/Moving';
import { motion } from "framer-motion";
const Header = () => {
    const [positon,setPosition]=useState({x:0,y:0})
    const [opacity,setOpacity]=useState(0)
    const headerVideoRef = useRef(null);
    function MouseMove(e) {
        setPosition({
            x:e.clientX-headerVideoRef.current.getBoundingClientRect().x,
            y:e.clientY-headerVideoRef.current.getBoundingClientRect().y
        })
    }
    return (
        <div className='landing-header'>
            <div id='element1' className="header-element">Data Science + AI Club /<span id='slash1'>/</span><span id='slash2'>/</span> NIT Agartala</div>
            <div id='element2' className="header-element">
                Emp<span id='o'><SiPython />
                </span>wering Data Science + AI for Students & Innovators
            </div>
            <div id='element3' className="header-element">
                We <span className='green'>create</span> projects <span className='green'>innovate</span> with AI models, and thrive in <span className='green'>collaborative learning</span>
            </div>
            <motion.div className="header-video" ref={headerVideoRef} whileInView={{scale:1}} transition={{duration:0.8}} initial={{scale:0.5}}>
                <div className="cursor" style={{scale:opacity,top:positon.y+'px',left:positon.x+'px'}}>
                    <p id='cursor-icon'><RxArrowTopRight/></p>
                    <p id='cursor-text'>watch</p>
                </div>
                <div className="header-video-layar" onMouseMove={MouseMove} onMouseEnter={()=>setOpacity(1)} onMouseLeave={()=>setOpacity(0)}></div>
                <video src={assets.header_video} autoPlay muted loop ></video>
            </motion.div>
            <Moving/>
        </div>
    )
}
export default Header;
