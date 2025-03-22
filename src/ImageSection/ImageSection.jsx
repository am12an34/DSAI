import React from 'react'
import './ImageSection.css'
import assets from "../Assets/Assets";
import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";
const ImageSection = () => {
    return (
        <div className='image-section'>
            <motion.img src={assets.Textimage} alt="" className="Sectionimage" data-scroll data-scroll-speed='1' />
            <div className="Sectionimage-filter" data-scroll data-scroll-speed='0.5'>
                <h2>Pioneers in Tech + Creativity</h2>
                <p>Our club isn’t just about learning; it’s about leading. Since day one, we’ve been crafting solutions that redefine innovation. From robotics to AI, web development to design, we’ve tackled challenges head-on and emerged as winners in hackathons, workshops, and competitions.</p>
                <button className='button'>
                    explore now <RxArrowTopRight />
                </button>
            </div>
        </div>
    )
}

export default ImageSection
