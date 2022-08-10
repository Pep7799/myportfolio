import React from 'react'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import react from '../images/react.jpg'
import tailw from '../images/tailw.png'
import styled from 'styled-components'
import {Card} from '../Styles'
import { Connect } from '../Styles'
import { useState } from 'react'
import Toggle from './Toggle'


const TechnicalSkills = () => {
  const [skills, setSkills] = useState(false);
  return (
    <Connect2>
    <div>
      <h1> Technical Skills</h1>
      <p>I'm passionate 
        about new technologies. 
        <br />
        I keep exploring and 
        always willing to learn more </p>
    </div>
    <div>
     
    <Card2>
      <div className='icon'>
         <img src={html} alt="" />                 
          <h3>HTML</h3>
       </div>
         
      <div>        
         <p>Elements, Atttributes, Formmatting and Styles,Colors, Logic, Forms, Graphics, Media, APIs</p>            
      </div>
           <div className='lineStyle'></div>
    </Card2>
    

    <Card2>
      <div className='icon'>
         <img src={css} alt="" />         
          <h3>CSS</h3>
      </div>
      <div>            
        <p>Elements, Atttributes, Formmatting and Styles,Colors, Logic, Forms, Graphics, Media, APIs</p>
      </div>
      <div className='lineStyle'></div>
    </Card2>

    <Card2>
      <div className='icon'>
         <img src={js} alt="" />         
         <h3>JAVASCRIPT</h3>
      </div>
      <div>
           <p>Elements, Atttributes, Formmatting and Styles,Colors, Logic, Forms, Graphics, Media, APIs</p>
      </div>
           <div className='lineStyle'></div>
    </Card2>
    
    <Card2>
      <div className='icon'>
         <img src={react} alt="" />         
            <h3>REACT JS</h3>
          </div>
          <div>
           <p>Elements, Atttributes, Formmatting and Styles,Colors, Logic, Forms, Graphics, Media, APIs</p>
           </div>
           <div className='lineStyle'></div>
    </Card2>

    <Card2>
      <div className='icon'>
         <img src={tailw} alt="" />         
            <h3>TAILWIND CSS</h3>
          </div>
          <div>
           <p>Elements, Atttributes, Formmatting and Styles,Colors, Logic, Forms, Graphics, Media, APIs</p>
           </div>
           <div className='lineStyle'></div>
    </Card2>
          
   </div>
    </Connect2>
  )
}

const Connect2 = styled(Connect)`
  margin-left: 20px;

  h1 {
    font-size: 24px;
  }
  p {
    font-size:15px
  }

  img {
      width: 50px ;
      height: 50px ;
      background-blend-mode: multiply ;
    }


`
const Card2 = styled(Card)`
  h3 {
  box-shadow: none;
  margin-left: 1px;
  font-size: 16px;
  }

  p {
    margin-top: 2px  ;
    left: 0px;
    font-size: 14px;
  }
 .lineStyle {
  height: 0.2rem;
  background: #2C3639;
  margin: 12px 30px;
  width: 70%;
 }


`

 
export default TechnicalSkills





