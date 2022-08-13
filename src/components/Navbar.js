import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {FaTimesCircle} from 'react-icons/fa'
import {CgMenuGridR} from 'react-icons/cg'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Navbar = () => {

    const {pathname} = useLocation();

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
  return (
    <Nav className= 'navbar'>
       <h1><a href='/' id = "pic">Pep</a></h1> 

       <div className='close' onClick={handleClick}>
                    {click ? (<FaTimesCircle size={20} style={{ color: '#000' }} />)
                        : (<CgMenuGridR size={20} style={{ color: '#000' }} />)}

                </div>

       <ul className={click ? "nav-menu active" : "nav-menu"}>
        
            <li className='each-item'>
            <Link to = "/" onClick={closeMenu}>About Me</Link>
            <Line 
            transition = {{duration: 0.75}} 
            initial = {{width: "0%"}} 
            animate = {{width: pathname === '/' ? '50%': '0%'}}/>
            </li>

            <li className='each-item'>
            <Link to = "/projects" onClick={closeMenu}>My Projects</Link>
            <Line 
            transition = {{duration: 0.75}} 
            initial = {{width: "0%"}} 
            animate = {{width: pathname === '/projects' ? '50%': '0%'}}/>
            </li>

            <li className='each-item'>
            <Link to = "/contact" onClick={closeMenu}>Contact Me</Link>
            <Line 
            transition = {{duration: 0.75}} 
            initial = {{width: "0%"}} 
            animate = {{width: pathname === '/contact' ? '50%': '0%'}}/>
            </li>
        
        </ul>    

    </Nav>
  )
}

const Nav = styled.nav `
    display: flex ;
    justify-content: space-between;
    min-height: 7vh;
    margin: 5px 10px ;
    align-items:center;
    padding: 0rem 3rem ;
    background: white;
    box-shadow: 1px 1px #000;
    position: sticky;
    top: 0;
    z-index: 10;


    #pic {
        font-size: 19px;
        font-style: italic;
        font-weight:500;
        
    }

    a {
        text-decoration: none;
        color: black ;
       
    }

    .close {
        display: none;
    }

    a:hover {
        color: #9BD8F3;
        padding-bottom: 12px;
        
        
     }
    
    ul {
        list-style: none ;
        display: flex;

        li {
            padding-left: 55px;
            position: relative ;
            font-size: 13px;
            text-transform: uppercase;
        }

    }

    @media screen and (max-width:452px) {
            max-width: 100%;
            overflow: hidden;
            margin-right:15px;
            
    }

    @media screen and (max-width:600px) {
 
            .navbar {
                max-width: 100%;
                overflow: hidden;
            }
            .close {
                display: block;
                width: 6vh; 
              
            }
            .close:hover {
                cursor:pointer;
            }
            .nav-menu {
                position: fixed;
                left: 100%;
                top: 50px;
                flex-direction: column;
                background-color: black;
                width: 50%;
                height: 100%;
                z-index: 999;
                text-align: center;
                transition: 0.3s;
                overflow-y: hidden;
            }

            .each-item {
                margin:45px 50px 60px 0;
                color: white;
             
            }
            .nav-menu.active {
                left: 0;
                
            }
          

            .nav-menu:hover {
                cursor: pointer;
            }


            .navbar img {
                width: 15px;
                height: 15px;
            }
            a {
                text-decoration: none;
                color: #9BD8F3 ;
                font-weight: bold;
            
            }
            a:hover {
            color: white;
            
            }   


        }  
        
      
`
const Line = styled(motion.div) `
    height: 0.2rem;
    background: #9BD8F3;
    position:absolute;
    width: 0%;
    border-bottom: 3px solid #9BD8F3;
    left: 40%;
    margin-bottom:12px;
    

`

export default Navbar