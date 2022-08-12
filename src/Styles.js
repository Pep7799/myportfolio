import styled from 'styled-components'
import {motion} from 'framer-motion'




export const About1 = styled(motion.section) `
  min-height: 90vh;
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90vh;
  background: #9BD8F3;
  min-width: 94%;
  padding-left: 30px ;
  overflow: hidden;
  margin-bottom: 20px;
  margin-top: 20px;

  h1 {
    
    font-size: 40px;
    color: black;
    width: 280px ;
    height: 18vh ;
  }

  @media(max-width: 700px) {
    min-height: 105vh;
    display: block;    
    width: 70vh;
    h1 {
    
    text-align: center;
    width: 100%;
  }
    
      
  }

 
`

export const Name2  = styled.span `
  font-size: 50px;
  color: #000;
`

export const Intro = styled(motion.div) `
  font-weight: 800;
  letter-spacing: 2px ;
  font-size: 20px ;

  @media(max-width: 700px) {
    font-size: 16px ;
    width: 100%;
    text-align: center;
  }

 

`

export const Image1 = styled.section `
  margin-bottom: 10px;
  margin-top: 30px;
  overflow: hidden;

  img {
  background:#9BD8F3;
  width : 100%;
  height: 80vh;
  }
  @media(max-width: 700px) {
    img {
      background:#9BD8F3;
      width : 60vh;
      height: 60vh;
      
  }
}

` 

export const Card = styled.div`
    flex-basis: 10rem ;
    margin-left: 0px;
    .icon {
      display: flex ;
      align-items: center ;
      margin-top: 20px ;
      margin-right: 10px ;
    }
    h3 {
      margin-left: 10px;
      box-shadow: 3px 5px 8px #888888;
      padding: 10px 10px;
      font-size: 18px;

    }

    p {
      margin-top: 5px;
      padding-left: 60px;
      width: 400px ;
      font-size: 17px;
      margin-bottom: 30px ;
    }
 

    

` 


export const Connect = styled(motion.div) `
  margin-left: 100px;
  @media(max-width: 700px) {
      align-items: center;
      min-height: 100vh;
      width: 100vh;
     
    }


  img {
        width: 60px ;
      height: 80px ;
      background-blend-mode: multiply ;
    }

   

    
`

export const Buttons = styled(motion.div) `
  button {
    font-size: 14px ;
    padding: 15px 13px ; 
    cursor: pointer;
    color: white;
    background: black;
    margin: 30px 8px 0 0;
    font-weight: bold;
    text-decoration: none;

   

  &:hover {
      color: black;
      background: #9BD8F3;

  }
}

      @media(max-width: 700px) {
            text-align: center;
          }

  

  `