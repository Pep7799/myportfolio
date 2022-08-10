import React from 'react'
import picone from '../images/picone.jpg';     //my picture
import {About1, Name2, Intro, Image1, Buttons} from '../Styles'
import {motion} from "framer-motion"
import styled from 'styled-components' 
import { aboutAnim, btnAnim, picAnim } from '../animation';


const AboutSection1 = () => {
 

  return (
    <About1>
      <motion.div className='app'>
        <motion.h1 variants={aboutAnim}> <Name2>Hi!</Name2> <br /> I am Pep!</motion.h1> 
        <Intro variants={aboutAnim}>I'm a zealous web developer always ready to learn and grow</Intro>
        <Buttons variants={btnAnim}>
        <button>Contact Me</button>
        <button>Download CV</button>
        </Buttons>
        </motion.div>
        <div>
        <Image1>
            <motion.img variants={picAnim} src={picone} width = "640" height="600" alt="cartoon me" />
        </Image1>
        </div>
    </About1>
  )
}





export default AboutSection1                    //exported to AboutMe.js