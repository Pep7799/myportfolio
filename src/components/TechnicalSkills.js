import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.jpg'
import tailw from '../images/tailw.png'
import styled from 'styled-components'
import {Card} from '../Styles'
import { Connect } from '../Styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import ScrollTop from './ScrollTop'


const TechnicalSkills = () => {
  
  return (
    <Connect2 >
    <div>
      <h1> Technical Skills</h1>
      <p>I'm passionate 
        about new technologies. 
        <br />
        I keep exploring and 
        always willing to learn more </p>
    </div>
    <div>
     
    <AnimateSharedLayout>
     <Card2>
     
      <Toggle title = 'HTML'>

      <div className='icon'>
         <img src={html} alt="" />                 
          
       </div>
         
      <div>        
         <p>Elements, Atttributes, Formmatting and Styles,Colors, Logic, Forms, Graphics, Media, APIs</p>            
      </div>
          

      </Toggle>
     
    </Card2>
    

    <Card2>
      <Toggle title = 'CSS'>
      <div className='icon'>
         <img src={css} alt="" />         
     
      </div>
      <div>            
        <p>Selectors, Display, Grid, Flex, Transforms, Animations, Transitions, Media queries, Viewport</p>
      </div>
      </Toggle>
     
    </Card2>

    <Card2>
      <Toggle title = 'JavaScript'>
      <div className='icon'>
         <img src={js} alt="" />         
      </div>
      <div>
           <p>Objects, Arrays, Functions, Events, Loops, Conditional statements, Maps, ES6, DOM, APIs</p>
      </div>
      </Toggle>
    </Card2>
    
    <Card2>
      <Toggle title = 'React JS'>
      <div className='icon'>
         <img src={react} alt="" />         
          </div>
          <div>
           <p>Components, Props, Events, Hooks, React Router, React Location, </p>
           </div>
      </Toggle>
    </Card2>

    <Card2>
      <Toggle title = 'Other skills'>
      <div className='icon'>
         <img src={tailw} alt="" />         
          </div>
          <div>
           <p>Tailwind CSS, SASS, Git and Github</p>
           </div>
           </Toggle>
           
     </Card2>
     </AnimateSharedLayout>
          
   </div>
   <ScrollTop/>
    </Connect2>
  )
}

const Connect2 = styled(Connect)`
  margin-left: 20px;
  min-height: 25px;

  h1 {
    font-size: 24px;
  }
  p {
    font-size:15px
  }

  img {
      width: 40px ;
      height: 40px ;
      background-blend-mode: multiply ;
    }

@media(max-width: 452px) {
  margin-left: 5px;
  width: 150vw;
}
`
const Card2 = styled(Card)`
  h3 {
  box-shadow: none;
  margin-left: 1px;
  font-size: 16px;
  }

  p {
    margin-top: 0px  ;
    left: 0px;
    font-size: 14px;
  }
 .lineStyle {
  height: 1px;
  background: #2C3639;
  margin: 12px 30px;
  width: 50%;
 }


`

 
export default TechnicalSkills





