import React from 'react'
import './Gridsection.css'
import Eachgrid from './Eachgrid'

const Gridsection = () => {
  return (
    <div className='grid-section'>
      <Eachgrid number={'/ 01'} heading={'50+'} text={'Members, Driving innovation in AI and Data Science'} />
      <Eachgrid number={'/ 02'} heading={'100+ '} text={'Projects, Showcasing our research and solutions'} />
      <Eachgrid number={'/ 03'} heading={'2022'} text={'Founded, 2 years of innovation'} />
      <Eachgrid number={'/ 04'} heading={'NIT Agartala'} text={'Located in the hub of bright minds'} />
      <Eachgrid number={'/ 05'} heading={'Innovation'} text={'From foundational research to real-world AI applications'} />
    </div>
  )
}
export default Gridsection;
