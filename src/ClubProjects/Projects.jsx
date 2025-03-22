import React from 'react'
import './Projects.css'
import Feature from '../components/Feature'
import assets from "../Assets/Assets";
export default function Projects() {
  const projects = [{
    image: assets.face_recogination,
    title2: 'Face Recognition',
    desc2: 'This project leverages live facial recordings to detect and analyse a persons mood based on facial gestures and expressions.',
    tags: ['computer vision', 'Face recogination', 'data modeling']
  },
  {
    image: assets.sky_saving,
    title2: 'Sky Saving Pro',
    desc2: 'This model compares flight prices across multiple booking platforms in real-time, allowing passengers to easily find and book the cheapestflight available.',
    tags: ['Cost Optimization', 'Real Time Pricing', 'data modeling']
  },
  ]
  const hackathon = [{
    image: assets.hackathon_1,
    title2: 'Bajaj Finserv HackRx 5.0',
    desc2: 'We achieved the first rank in our problem statementby developing a model that processes PDF or Word & summarizes the content into key topics and generates a question-answer.',
    tags: ['1st rank', 'quiz genrator', 'hackathon']
  },
  {
    image: assets.hackathon_2,
    title2: 'Amazon ML Hackathon',
    desc2: 'A team from the club ranked in the top 1.25%, securing 972 out of 75,000+ teams across India in Hackathon.',
    tags: ['amazon', 'AI ML', 'amaong 1.25%']
  },
  ]
  return (
    <div className='features'>
      <div className='features-head'>
        <span id='head'>/ club featured works</span>
        <p id='head-text1'>Our club explores the transformative potential of Data Science & Artificial Intelligence.</p>
        <p id='head-text2'>We focus on innovative projects, hands-on workshops, and meaningful collaborations. From predictive analytics and machine learning to real world AI applications, we empower students to tackle complex challenges. Our initiatives cater to beginners and experts alike, fostering growth and development in cutting edge technologies.</p>
      </div>
      <div className='features-content'>
        <Feature title1={'projets'} desc1={'Explore innovative DSAI Club projects that harness Data Science and AI to solve real world challenges and drive impactful solutions.'} btntext={'explore all projects'} content={projects}/>
        <Feature title1={'hackathon'} desc1={'A proud achievement where our club showcased exceptional teamwork and innovative solutions, securing victory in a highly competitive hackathon'} btntext={'explore all participation'} content={hackathon}/>
      </div>
    </div>
  )
};


