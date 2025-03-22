import React, { useRef, useState } from 'react'
import './Footer.css'
import { RxArrowTopRight } from "react-icons/rx";
import { FaRegCopyright } from "react-icons/fa6";
import Button2 from '../Button/Button2'

const Footer = () => {
  const [positon, setPosition] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(0)
  const footerChild = useRef(null);
  function MouseMove(e) {
    setPosition({
      x: e.clientX - footerChild.current.getBoundingClientRect().x,
      y: e.clientY - footerChild.current.getBoundingClientRect().y
    })
  }
  function amanRedirect() {
    window.open('https://www.instagram.com/aman_is_loading',"_blank")
  }
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-child1" ref={footerChild} >
          <div className="cursor-filter" onMouseMove={MouseMove} onMouseEnter={() => setScale(1)} onMouseLeave={() => setScale(0)}></div>
          Interested in AI and Data Science ?<br />Join Us!
          <div className="cursor" style={{ scale: scale, top: positon.y + 'px', left: positon.x + 'px' }}>
            <p id='cursor-icon'><RxArrowTopRight /></p>
            <p id='cursor-text'>join now</p>
          </div>
        </div>
        <div className="footer-child2">
          <div className="footer-sub-child2">
            <p>let's connect :</p>
            <Button2 text={'join our group'} />
          </div>
          <div className="footer-sub-child2">
            <p>our location :</p>
            <p id='location'>NIT Agartala Barjala, Agartala, Tripura - 799046</p>
          </div>
        </div>
        <div className="footer-child3">
          <div className="footer-subchild3">shaping expreinces :
            <ul>
              <li>AI Workshops</li>
              <li>coding challenges</li>
              <li>Research projects</li>
              <li>Hackathons</li>
            </ul>
          </div>
          <div className="footer-subchild3">where we shine :
            <ul>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Neural Networks</li>
              <li>Data Analytics</li>
            </ul>
          </div>
          <div className="footer-subchild3">behind the screens :
            <ul style={{ textTransform: 'uppercase' }}>
              <li>Club Vision</li>
              <li>Success Stories</li>
              <li>Meet Our Team</li>
            </ul>
          </div>
        </div>
        <div className="footer-child4">
          our socials :
          <div className="socialbtn"><Button2 text={'linkedin'} onClick={()=>window.open('https://www.linkedin.com/company/dsai-nita','_blank')}/><Button2 text={'instagram'} onClick={()=>window.open('https://www.instagram.com/dsai_nita/','_blank')} /><Button2 text={'github'} onClick={()=>window.open('https://github.com/dsai-nita','_blank')} /></div>
        </div>
      </div>
      <div className="footer-bottom">
        <p><FaRegCopyright/> 2025-26 | All rights reserved</p>
        <p>Designed and Developed by <span onClick={amanRedirect}>Aman Mishra</span> (DSAI Club, NIT Agartala)</p>
      </div>
    </div>
  )
}
export default Footer;
