import React from 'react'
import picone from '../images/picone.jpg';     //my picture
import {About1, Name2, Intro, Image1, Buttons} from '../Styles'
import {motion} from "framer-motion"
import { aboutAnim, btnAnim, picAnim } from '../animation';
import ScrollTop from './ScrollTop';


const AboutSection1 = () => {
 

  return (
    <About1>
      <motion.div className='app'>
        <motion.h1 variants={aboutAnim}> <Name2>Hi!</Name2> <br /> I am Pep!</motion.h1> 
        <Intro variants={aboutAnim}>I'm a Web developer passionate about new technologies and implementing them</Intro>
        <Buttons variants={btnAnim}>
          <a href="https://twitter.com/SuperGirl_P" target = '_blank'>
        <button>Contact Me</button>
        </a>
        <button>Download CV</button>
        </Buttons>
        </motion.div>
        <div>
        <Image1>
            <motion.img variants={picAnim} src={picone} width = "640" height="600" alt="cartoon me" />
        </Image1>
        </div>
        <ScrollTop/>
    </About1>
  )
}





export default AboutSection1                    //exported to AboutMe.js