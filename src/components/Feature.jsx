import React from 'react'
import './Feature.css'
import Button3 from '../Button/Button3';
import Button2 from '../Button/Button2';
import { MdArrowOutward } from "react-icons/md";
const Feature = ({ title1, desc1, btntext,content }) => {
  return (
    <div className='club-feature'>
      <div className="feature-left">
        <p id='title1'>{title1}</p>
        <p id='desc1'>{desc1}</p>
        <Button3 text={btntext} />
      </div>
      <div className="feature-right">
        {content.map((eachContent) => {
          return <div className="feature-right-sub">
            <div className="right-sub1">
              <p id='title2'>{eachContent.title2}</p>
              <p id='desc2'><p id='desc2text'>{eachContent.desc2}<MdArrowOutward /></p>
                <p id='tags'>
                  {eachContent.tags.map((each) => {
                    return <Button2 text={each} border={true} />
                  })}
                </p>
              </p>
            </div>
            <div className="right-sub2">
              <img src={eachContent.image} alt="" />
            </div>
          </div>
        })}
      </div>
    </div>
  );
}
export default Feature;
