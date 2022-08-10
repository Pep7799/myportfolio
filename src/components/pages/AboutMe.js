import React from 'react'
import AboutSection1 from '../components/AboutSection1'         //the upper part of the about page imported
import AboutSection2 from '../components/AboutSection2' 
import Navbar from '../components/Navbar'
import TechnicalSkills from '../components/TechnicalSkills'
import {motion} from 'framer-motion'
import { pageAnimation } from '../animation'


const AboutMe = () => {
  return (
    <div>
    <Navbar/>
    <motion.div variants={pageAnimation} initial = "hidden" animate = "show" exit= 'exit'>
      
        <AboutSection1 />
        <AboutSection2 />
        <TechnicalSkills/>
    </motion.div>
    </div>
  )
}

export default AboutMe