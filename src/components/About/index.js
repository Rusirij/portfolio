import { useEffect, useState } from 'react'
import {
  faAngular,
  faJava,
  faJs,
  faHtml5,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>            
          Hello, I'm Rusiri, a seasoned Full Stack Developer with five years of experience in the tech realm. 
          I completed my BSc in Computer Engineering in 2017 and kicked off my career as a Java Backend Developer
           in January 2018. Over the years, I've progressed to the role of a Senior Engineer, navigating the various
            stages of the Software Development Life Cycle, Software Engineering Processes, and industry Best Practices.
          </p>
          <p align="LEFT">
          In addition to my professional endeavors, I'm passionate about continuous learning and stay engaged by working
          on personal projects. This self-driven exploration allows me to delve into new technologies and stay at the forefront 
          of industry advancements
          </p>
          <p>
          As a final-year student, actively seeking exciting job opportunities in the tech industry, 
          I am genuinely excited about the possibilities and challenges that this dynamic field presents. 
          I thrive on finding solutions and making a lasting impact in the evolving tech landscape.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJs} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faReact} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  )
}

export default About
