import React from 'react'
import styled from 'styled-components'
import { pageAnimation, aboutAnim } from '../animation'
import { motion } from 'framer-motion'
import github from '../images/github.png'
import email from '../images/email.jpg'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'

const Contacts = () => {
  return (
    <ContactContainer variants = {aboutAnim} initial = 'hidden' animate = 'show' style = {{background: "#fff", color: '#FFFFFF'}}>
      <div className='justtext'>
        <h1>Want to get in touch with me?</h1>
      </div>
      
    <div className='contactform'>
      <form className='formpart' target='_blank' action="https://formspree.io/f/xwkzklre"
         method="POST">
        <input name="email" type="email" className='emailpart emailinput' placeholder='Your email' />
        <textarea name="message" type= 'text' placeholder='Your message' className='emailpart textpart' id="">

        </textarea>
        <button type='submit' className='contactsubmit'>Send</button>


      </form>

    </div>



      <div className='contacticons'>
      <a href="https://github.com/Pep7799" target = '_blank'>
        <img className='icon' src={github} width = '40' height= '40' alt="" />
      </a>
      <a href="https://twitter.com/SuperGirl_P" target = '_blank'>
        <img className='icon' src={twitter} width = '30' height= '30' alt="" />
      </a>
      <a href="https://www.linkedin.com/in/oluwa-pelumi/" target = '_blank'>
        <img className='icon' src={linkedin} width = '30' height= '30' alt="" />
      </a>
      <div className='emailclass'>
        <img src={email} className= 'emailimage' width = '30' height= '30' alt="" />
        <div className='emailtext'>
          <p>folamioluwapelumi1@gmail.com</p>
        </div>
        </div>
        </div>
      
    </ContactContainer>
  )
}
const ContactContainer = styled(motion.div)`
  padding: 1rem ;
  background: #fff;
  height: 90vh;
  


  
  h1 {
    color: #000;
  }


  .contactform {
    width: 50%;
    align-self: center;
    margin: 50px auto;
  }

  .formpart {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .emailpart {
    width: 100%;
    background: #fff;
    border: 1px solid #9BD8F3;
    box-sizing:border-box;
    box-shadow: 0px 2px 2px #9BD8F3;
    border-radius:39px;
    padding: 10px 35px;
    margin: 10px 0;
    line-height: 16px;
    font-size: 14px;
  }

  .textpart {
    height: 250px;
    padding: 25px 35px;
  }

  .contactsubmit {
    margin: 10px 0px;
    border: none;
    color: #fff ;
    font-weight: 700px;
    font-size: 15px;
    line-height: 16px;
    width: 100%;
    text-align: center;
    padding: 17px 35px;
    background-color: #000;
    border-radius: 35px;
  }

  .contactsubmit:hover {
    color: #000;
    background: #9BD8F3;
    cursor: pointer;
  }

  .contacticons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    
  }
  .icon{
    opacity: 0.8;
    transition: width 2s;
  }
  .icon:hover {
    opacity: 1;
    height: 43px;
  }


  img {
   
    margin-left: 20px;
   

  }
  .emailclass {
    position: relative;
  }

  .emailimage{
    opacity: 1;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .emailtext{
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  bottom: 100%;
  left: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
  }

  .emailtext > p{
    background-color: #9BD8F3;
    color: black;
    font-size: 16px;
    padding: 10px 12px;
  }

  .emailclass:hover .emailimage {
    opacity: 0.3;
  }

  .emailclass:hover .emailtext {
  opacity: 1;
}

@media(max-width: 452px) {
  .contacticons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    
  }

  .emailtext{
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 250%;
    left: 30%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

`

export default Contacts