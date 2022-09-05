import React from 'react'
import styled from 'styled-components'
import { Buttons } from '../Styles'
import weatherdes from '../images/weatherdes.png'
import ml from '../images/ml.png'
import quizl from '../images/quizl.png'
import { aboutAnim, picAnim, slideAnim  } from '../animation'
import {motion} from 'framer-motion'
import markdown from '../images/makdown.png'
import useScroll from './useScroll'
import { scrollAnim } from '../animation'
import ScrollTop from './ScrollTop'



const Projects = () => {
  const [element, controls] = useScroll()
  const [element2, controls2] = useScroll()
  const [element3, controls3] = useScroll()
  return (
    <div>
      <Frame1 variants ={slideAnim}></Frame1>
      <Frame2 variants ={slideAnim}></Frame2>


      <Container>
          <motion.h2 variants = {aboutAnim} >Markdown app</motion.h2>
          <motion.p variants={aboutAnim}>A markdown preview app made with React, Firebase Authentication, CSS for styling an context API</motion.p>
          <motion.div variants={picAnim} className='line'></motion.div>
          <IMG >
          <Hide>
          <motion.img variants = {picAnim} src={markdown} width = "100%" alt="perfumeapp" />
          </Hide>
          </IMG>
         

          <Buttons2>
            <button>
            <a href="https://github.com/Pep7799/markdownapp" rel="noopener noreferrer" target= "_blank">View code</a>
            </button>
            <button>
            <a href="https://markdown2.vercel.app/" rel="noopener noreferrer" target= "_blank">Preview</a>
            </button>
          </Buttons2>
        </Container>


        <Container variants = {scrollAnim} animate = {controls2} initial = 'hidden' ref = {element2}>
          <h2>Beats loaded</h2>
          <p>A music app created with React, SCSS and fontawesome icons</p>
          <motion.div className='line'></motion.div>
          <IMG >
          <img src={ml} width = "100%" alt="musicapp" />
          </IMG>

          <Buttons2>
            <button>
            <a href="https://github.com/Pep7799/MusicPlayer" rel="noopener noreferrer" target= "_blank">View code</a>
            </button>
            <button>
            <a href="https://musicp.vercel.app/" rel="noopener noreferrer" target= "_blank">Preview</a>
            </button>
          </Buttons2>
        </Container>


        <Container variants = {scrollAnim} animate = {controls} initial = 'hidden' ref = {element}>
          <h2>Weather APP</h2>
          <p variants={aboutAnim}>A weather app created with React, weather API and Tailwind CSS for styling</p>
          <motion.div variants={picAnim} className='line'></motion.div>
          <IMG >
          <Hide>
          <img src={weatherdes} width = "100%" alt="weatherapp" />
          </Hide>
          </IMG>
         

          <Buttons2>
            <button>
            <a href="https://github.com/Pep7799/weatherApp" rel="noopener noreferrer" target= "_blank">View code</a>
            </button>
            <button>
            <a href="https://wea-app.vercel.app/" rel="noopener noreferrer" target= "_blank">Preview</a>
            </button>
          </Buttons2>
        </Container>


        

        <Container variants = {scrollAnim} animate = {controls3} initial = 'hidden' ref = {element3}>
          <h2>Quiz APP</h2>
          <p>A collaborated quiz app created with React, React Router and Tailwind CSS for styling</p>
          <motion.div className='line'></motion.div>
          <IMG >
          <img src={quizl} width = "100%" alt="quizapp" />
          </IMG>

          <Buttons2>
            <button>
            <a href="https://github.com/Pep7799/quiza" rel="noopener noreferrer" target= "_blank">View code</a>
            </button>
            <button>
            <a href="https://quiza.vercel.app/" rel="noopener noreferrer" target= "_blank">Preview</a>
            </button>
          </Buttons2>
        </Container>
        <ScrollTop/>


    </div>
  )
}


 const Container = styled(motion.div)`
 margin-bottom: 170px;
 h2 {
  font-size: 20px ;
  margin: 30px 90px 0px 90px;
  font-family: 'Playfair Display', serif;

 }
 .line {
  height: 0.2rem;
  background: #2C3639;  
  margin: 30px 90px 30px 90px; 
  border-radius: 20px;
 }
 p {
  font-size: 18px ;
  margin: 30px 90px 0px 90px;
 }
 
`

const IMG = styled.div `
 margin: 30px 90px 0px 90px;
  img {
    width: 100vw;
    max-width: 100%;
    
    object-fit: cover;    
  }
`

const Buttons2 = styled(Buttons) `
  
    align-items: center;
    display: flex;
    justify-content: center ;

    button {
      margin-right: 60px;
      margin-left: 20px;

      a {
        text-decoration: none;
        color: white;
      }
    }
  
    @media(max-width: 452px){
      button {
      margin-left: 10px;
      margin-right: 20px;
      font-size: 16px ;
      padding: 6px 7px ;
      
      }
    }

`
const Hide = styled.div `
  overflow: hidden;
`

const Frame1 = styled(motion.div)`
position: fixed;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 2;

`

const Frame2 = styled(Frame1)`
  background: #ECA762;
`




export default Projects