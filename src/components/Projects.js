import React from 'react'
import styled from 'styled-components'
import { Buttons } from '../Styles'
import weatherdes from '../images/weatherdes.png'
import ml from '../images/ml.png'
import quizl from '../images/quizl.png'
import { aboutAnim, picAnim, slideAnim  } from '../animation'
import {motion} from 'framer-motion'
import ecommerce from '../images/ecommerce.png'


const Projects = () => {
  return (
    <div>
      <Frame1 variants ={slideAnim}></Frame1>
      <Frame2 variants ={slideAnim}></Frame2>


      <Container>
          <motion.h2 variants = {aboutAnim} >Ecommmerce App</motion.h2>
          <motion.p variants={aboutAnim}>A perfume ecommerce app with React and CSS</motion.p>
          <motion.div variants={picAnim} className='line'></motion.div>
          <IMG >
          <Hide>
          <motion.img variants = {picAnim} src={ecommerce} width = "100%" alt="" />
          </Hide>
          </IMG>
         

          <Buttons2>
            <button>
            <a href="" target= "_blank">Github link</a>
            </button>
            <button>
            <a href="https://ecommercep.vercel.app/" target= "_blank">Preview</a>
            </button>
          </Buttons2>
        </Container>

        <Container>
          <motion.h2 variants = {aboutAnim} >Weather APP</motion.h2>
          <motion.p variants={aboutAnim}>A weather app created with React, weather API and Tailwind CSS for styling</motion.p>
          <motion.div variants={picAnim} className='line'></motion.div>
          <IMG >
          <Hide>
          <motion.img variants = {picAnim} src={weatherdes} width = "100%" alt="" />
          </Hide>
          </IMG>
         

          <Buttons2>
            <button>
            <a href="" target= "_blank">Github link</a>
            </button>
            <button>
            <a href="https://wea-app.vercel.app/" target= "_blank">Preview</a>
            </button>
          </Buttons2>
        </Container>


        <Container>
          <h2>Beats loaded</h2>
          <p>A music app created with React, SCSS, </p>
          <div className='line'></div>
          <IMG >
          <img src={ml} width = "100%" alt="" />
          </IMG>

          <Buttons2>
            <button>
            <a href="" target= "_blank">Github link</a>
            </button>
            <button>
            <a href="https://musicp.vercel.app/" target= "_blank">Preview</a>
            </button>
          </Buttons2>
        </Container>


        <Container>
          <h2>Quiz APP</h2>
          <p>A collaborated quiz app created with React, React Router and Tailwind CSS for styling</p>
          <div className='line'></div>
          <IMG >
          <img src={quizl} width = "100%" alt="" />
          </IMG>

          <Buttons2>
            <button>
            <a href="" target= "_blank">Github link</a>
            </button>
            <button>
            <a href="https://quiza.vercel.app/" target= "_blank">Preview</a>
            </button>
          </Buttons2>
        </Container>


    </div>
  )
}


 const Container = styled.div`
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