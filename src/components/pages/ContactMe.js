import React from 'react'
import Contacts from '../components/Contacts'
import Navbar from '../components/Navbar'
import {motion} from 'framer-motion'
import { pageAnimation } from '../animation'


const ContactMe = () => {
  return (
    <div>
        <Navbar/>
        <motion.div style={{background: '#fff'}} variants={pageAnimation} initial = "hidden" animate = "show" exit= 'exit'>
        <Contacts/> 
        </motion.div>     
        
    </div>
  )
}

export default ContactMe