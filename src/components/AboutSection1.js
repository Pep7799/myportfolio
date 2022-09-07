import React from 'react'
import picone from '../images/picone.jpg';     //my picture
import {About1, Name2, Intro, Image1, Buttons} from '../Styles'
import {motion} from "framer-motion"
import { aboutAnim, btnAnim, picAnim } from '../animation';
import ScrollTop from './ScrollTop';
import resume from '../file/FolamiPCV.pdf'



const AboutSection1 = () => {
 

  return (
    <About1>
      <motion.div className='app'>
        <motion.h1 variants={aboutAnim}> <Name2>Hi!</Name2> <br /> I am Pep!</motion.h1> 
        <Intro variants={aboutAnim}>I'm a passionate <br /> software developer <br /> and technical writer.</Intro>
        <Buttons variants={btnAnim}>
          <a href="https://supergirlp.hashnode.dev/" target = '_blank'>
            <button>Visit my blog page</button>
          </a>
          <a href={resume} proposed_file_name="Folami_Pelumi" download="Folami_Pelumi"> 
            <button>Download CV</button>
          </a>
        </Buttons>
      </motion.div>
      <div>
        <Image1>
            <motion.img variants={picAnim} src={picone} width = "340" height="600" alt="cartoon me" />
        </Image1>
      </div>
        <ScrollTop/>
    </About1>
  )
}





export default AboutSection1                    //exported to AboutMe.js