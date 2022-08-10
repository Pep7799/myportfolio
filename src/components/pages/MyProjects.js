import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import {motion} from 'framer-motion'
import { pageAnimation } from '../animation'

const MyProjects = () => {
  return (
    <div>
    <Navbar/>
    <motion.div variants={pageAnimation} initial = "hidden" animate = "show" exit= 'exit'>
       
        <Projects/>

    </motion.div>
    </div>
  )
}

export default MyProjects