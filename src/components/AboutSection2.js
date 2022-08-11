import React from 'react'
import pictwo from '../images/pictwo.jpg'
import icon1 from '../images/icon1.jpg'
import icon2 from '../images/icon2.jpg'
import icon3 from '../images/icon3.jpg'
import styled from 'styled-components'
import {About1} from '../Styles'
import {Card} from '../Styles'
import {Connect, Image1} from '../Styles'


const AboutSection2 = () => {
  return (
    <About2>
        <Image1>
          <img src={pictwo} width = "640" height="600" alt="guy on laptop" />
        </Image1>

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
        
    </About2>
  )
}

const About2 = styled(About1)`
  padding-left:0px;
  margin-left: 0px;
  display: flex;
  justify-content: space-between;
  margin-right:90px;
  height: 130vh ;

  .image{
    margin-left: 40px;
  }

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
    margin-bottom:10px


  
`


const All = styled.div `
    display: flex ;
    flex-wrap: wrap;

` 







export default AboutSection2