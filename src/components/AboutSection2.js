import React from 'react'
import pictwo from '../images/pictwo.jpg'
import icon1 from '../images/icon1.jpg'
import icon2 from '../images/icon2.jpg'
import icon3 from '../images/icon3.jpg'
import styled from 'styled-components'
import {About1} from '../Styles'
import {Card} from '../Styles'
import {Connect, Image1} from '../Styles'
import { scrollAnim } from '../animation'
import useScroll from './useScroll'
import ScrollTop from './ScrollTop'


const AboutSection2 = () => {
  const [element, controls] = useScroll()
  return (
    <About2 >
        <Image2>
          <img src={pictwo} className= 'imglap' width = "640" height="600" alt="guy on laptop" />
        </Image2>

        <div>
        <Connect>
          <Para>Why connect with me?</Para>
            <All>
               <Card>
                <div className='icon'>
                   <img src={icon1} alt="" />          
                       <h3>Problem solver</h3>
                </div>
                <p>a thinker who focuses on the problem as stated and tries to synthesize information and knowledge to achieve a solution</p>
               </Card>
            
               <Card>
                <div className='icon'>
                  <img src={icon2} alt="" />
                     <h3>Results driven</h3>
                     </div>
                <p>uses targets to stay motivated in their work</p>
               </Card>
           
               <Card>
                <div className='icon'>
                  <img src={icon3} alt="" />
                   <h3>Deadline conscious</h3>
                   </div>
                <p>able to work effectively on tight timetables. Fast, accurate turnaround.</p>
               </Card>
            
              
              </All>
        </Connect>
        </div>
        <ScrollTop/>
        
    </About2>
  )
}

const About2 = styled(About1)`
 text-align: left;

 
  img {
    object-fit: contain;
    margin-right:2px;
    background-blend-mode: multiply ;

  }
 


`


const Para = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin-top:70px;
    margin-bottom:10px;
    text-align: left;
  
    @media(max-width: 452px){
      width: 50%;
    }
  
`


const All = styled.div `
    display: flex ;
    flex-wrap: wrap;
   
  @media(max-width: 452px){
    width: 25%;
  }

` 

const Image2 = styled(Image1)`
   margin-bottom: 10px;
    margin-top: 30px;
    overflow: hidden;

  img {
  
  width : 100%;
  height: 80vh;
  opacity: 1;
  }

  @media(max-width: 900px) {
    img {
     
      display: none;
    }
  }
 

`







export default AboutSection2