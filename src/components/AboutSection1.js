import React from 'react'
import picone from '../images/picone.jpeg';     //my picture

const AboutSection1 = () => {
  return (
    <section>
        <div className="name"> <span>Hi</span> I am Pep!</div> 
        <div className='name-two'>I'm a creative web developer always ready to learn and grow</div>
        <button>Contact Me</button>
        <button>Download CV</button>
        <div className='image1'>
            <img src={picone} alt="cartoon me" />
        </div>
    </section>
  )
}

export default AboutSection1                    //exported to AboutMe.js