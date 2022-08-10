import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
       <h1><a href='/' id = "pic">Pep</a></h1> 
       <ul>
        
            <li>
            <Link to = "/">About Me</Link>
            </li>

            <li>
            <Link to = "/projects">My Projects</Link>
            </li>

            <li>
            <Link to = "/contact">Contact Me</Link>
            </li>
        
        </ul>    

    </Nav>
  )
}

const Nav = styled.nav `
    display: flex ;
    justify-content: space-between;
    min-height: 9vh;
    margin: 5px 10px ;
    align-items:center;
    padding: 0rem 3rem ;
    background: white;
    box-shadow: 1px 1px #000;

    #pic {
        font-size: 19px;
        font-style: italic;
        font-weight:500;
        
    }

    a {
        text-decoration: none;
        color: black ;
       
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
`
export default Navbar