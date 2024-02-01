// index.js

import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import data from "../../data/skills.json";
import Loader from 'react-loaders'
import './index.scss';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
  
    return (
      <>
        <div className="container skills-page">
          <div className="text-zone">
              <h1>
                  <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['S', 'k', 'i', 'l', 'l', 's']}
                  idx={15}
                  />
              </h1>
          </div>
          <div className="skills-row">
                    <div className="skills--section--container">
                        {data?.skills?.map((item, index) => (
                            <div key={index} className="skills--section--card">
                                <div className="skills--section--img">
                                    <img src={item.src} alt={item.title} />
                                </div>
                                <div className="skills--section--card--content">
                                    <h3 className="skills--section--title">{item.title}</h3>
                                    <p className="skills--section--description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
          </div>
        </div>
        <Loader type="ball-scale-multiple" />
      </>
      
    );
  };
  
  export default Skills;
