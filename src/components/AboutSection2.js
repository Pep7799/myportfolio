import React from 'react'
import pictwo from '../images/pictwo.png'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.jpg'
import icon4 from '../images/icon4.png'

const AboutSection2 = () => {
  return (
    <section>
        <div className='pictwoo'><img src={pictwo} alt="" /></div>
        <div className="connectabout">
          <p>Why connect with me?</p>

          <img src={icon1} alt="" />
            <h3>Problem solver</h3>
            <p>a thinker who focuses on the problem as stated and tries to synthesize information and knowledge to achieve a solution</p>

            <img src={icon2} alt="" />
            <h3>Results driven</h3>
            <p>uses targets to stay motivated in their work</p>

            <img src={icon3} width = "140" height="140"  alt="" />
            <h3>Deadline conscious</h3>
            <p>able to work effectively on tight timetables. fast, accurate turnaround.
             </p>

             <img src={icon4} alt="" />
            <h3>Clear communicator</h3>
            <p>Effective use of oral, visual, written, and aural modes of communication signifies the professional competence and knowledge 
              expected in a leader while engendering the trust of those being led.</p>
        </div>
        
    </section>
  )
}

export default AboutSection2