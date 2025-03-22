import React from 'react'
import './Eachgrid.css'

const Eachgrid = ({ number, heading, text,speed }) => {
    return (
        <div className="grid-element" data-scroll data-scroll-speed={speed} >
            <p id="elm-sub1">{number}</p>
            <p id="elm-sub2">
                <p id="elm-sub2-1">{heading}</p>
                <p id="elm-sub2-2">{text}</p>
            </p>

        </div>
    )
}
export default Eachgrid
