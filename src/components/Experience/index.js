// ExperienceTimeline.js
import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AnimatedLetters from '../AnimatedLetters';
import VirtusaLogo from '../../assets/images/virtusa_logo.png'
import MitraLogo from '../../assets/images/mitra_innovation_logo.png'
import IESLLogo from '../../assets/images/IESLLogo.png'
import Seneca from '../../assets/images/Seneca.png'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUniversity, faSuitcase} from '@fortawesome/free-solid-svg-icons'
import './index.scss';

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      return setTimeout(() => {
      setLetterClass('text-animate-hover')
      }, 3000)
  }, [])

  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                idx={15}
                />
            </h1>
        </div>
        <div className="experience-timeline">
          <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - 2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faUniversity} className="fa-icon" />}
              >
              <div className="timeline-content">
                {/* Left column for the image */}
                <div className="left-column">
                  <img src={IESLLogo} alt="IESLLogo" className="company-image" />
                </div>

                {/* Right column for title */}
                <div className="right-column">
                  <h3 className="vertical-timeline-element-title">BSc in Computer Engineering</h3>
                </div>
              </div>

              <h4 className="vertical-timeline-element-subtitle">IESL College Of Engineering, Sri Lanka</h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2019"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faSuitcase} className="fa-icon" />}
            >
              <div className="timeline-content">
                {/* Left column for the image */}
                <div className="left-column">
                  <img src={VirtusaLogo} alt="VirtusaLogo" className="company-image" />
                </div>

                {/* Right column for title */}
                <div className="right-column">
                  <h3 className="vertical-timeline-element-title">Associate Software Engineer</h3>
                 
                </div>
              </div>

            <h4 className="vertical-timeline-element-subtitle">Virtusa Pvt Ltd., Sri Lanka</h4>
            <h2 className="vertical-timeline-element-title">Maintenance of system using J2EE, Core Java and EJB with the assistance of tech leads.</h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faSuitcase} className="fa-icon" />}
            >
              <div className="timeline-content">
                {/* Left column for the image */}
                <div className="left-column">
                  <img src={VirtusaLogo} alt="VirtusaLogo" className="company-image" />
                </div>

                {/* Right column for title */}
                <div className="right-column">
                  <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                </div>
              </div>

              <h4 className="vertical-timeline-element-subtitle">Virtusa Pvt Ltd., Sri Lanka</h4>
              <h2 className="vertical-timeline-element-title">Development & Maintenance of system using J2EE, Spring MVC. Implemented and Maintained web appications SOAP, REST webservices. Functional and Acceptance testing and defect reports using organizational tools.</h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faSuitcase} className="fa-icon" />}
            >
              <div className="timeline-content">
                {/* Left column for the image */}
                <div className="left-column">
                  <img src={VirtusaLogo} alt="VirtusaLogo" className="company-image" />
                </div>

                {/* Right column for title */}
                <div className="right-column">
                  <h3 className="vertical-timeline-element-title">Associate Consultant</h3>
                </div>
              </div>

              <h4 className="vertical-timeline-element-subtitle">Virtusa Pvt Ltd., Sri Lanka</h4>
              <h2 className="vertical-timeline-element-title">Analyse and resolve complex technical problems. Played a lead role in attending to Sprint Planning with the client and assign story points on each tasks. Manage stakeholder expectations in order to solve technical problems and provide technical solutions.</h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faSuitcase} className="fa-icon" />}
            >
              <div className="timeline-content">
                {/* Left column for the image */}
                <div className="left-column">
                  <img src={MitraLogo} alt="MitraLogo" className="company-image" />
                </div>

                {/* Right column for title */}
                <div className="right-column">
                  <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
                </div>
              </div>

              <h4 className="vertical-timeline-element-subtitle">Mitra Innovations, Sri Lanka</h4>
              <h2 className="vertical-timeline-element-title">
Expertly tackled complex technical issues within an Agile context. Led Sprint Planning sessions with the client, assigning appropriate story points to tasks. Effectively managed stakeholder expectations, ensuring alignment with Agile methodologies while providing innovative technical solutions.</h2>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2023 - Present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faUniversity} className="fa-icon" />}
            >
              <div className="timeline-content">
                {/* Left column for the image */}
                <div className="left-column">
                  <img src={Seneca} alt="Seneca" className="company-image" />
                </div>

                {/* Right column for title */}
                <div className="right-column">
                  <h3 className="vertical-timeline-element-title">Post Graduate In Buisness Information Technology</h3>
                </div>
              </div>

              <h4 className="vertical-timeline-element-subtitle">Seneca College</h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>        
      </div>
      <Loader type="ball-scale-multiple" />
    </>
   
  );
};

export default Experience
