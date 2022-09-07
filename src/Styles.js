import styled from 'styled-components'
import {motion} from 'framer-motion'




export const About1 = styled(motion.section) `
  min-height: 55vh;
 
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90vh;
  background: #9BD8F3;
  min-width: 94%;
  padding-left: 30px ;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 10px;
/*
  .app {
    margin-right: 10px;
    width: 80%;
  }*/
  
  h1 {
    
    font-size: 40px;
    color: black;
    width: 250px ;
    height: 25vh ;
    
  }

  @media screen and (max-width: 700px) {
 
}
 

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    min-height: 45vh;
    width: 10vh;
    h1 {
      font-size: 25px;
      color: black;
      width: 150px ;
      height: 20vh ;
      text-align: center;

  
      
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

  @media screen and (max-width: 700px) {
    font-size: 16px ;
    width: 100%;
    text-align: left;
    
  }
  @media screen and (max-width: 500px) {
    font-size: 13px ;
    width: 80%;
    text-align: center;
    
  }

 

`

export const Image1 = styled.section `
  margin-bottom: 10px;
  margin-top: 30px;
  overflow: hidden;

  img {
  background:#9BD8F3;
  width : 90%;
  height: 80vh;
  }
  @media(max-width: 700px) {
    img {
      background:#9BD8F3;
      width : 60vh;
      height: 60vh;
      
  }
}

  @media(max-width: 452px) {
    img {
      background:#9BD8F3;
      width : 40vh;
      height: 50vh;
      text-align:left;
      margin-left: 0px;
      
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
 
@media(max-width: 452px){
  
  p {
      margin-top: 5px;
      padding-left: 60px;
      width: 300px ;
      font-size: 17px;
      margin-bottom: 30px ;
    }
 
}
    

` 


export const Connect = styled(motion.div) `
  margin-left: 100px;
  @media screen and (max-width: 700px) {
      align-items: center;
      height: 95vh;
      width: 100vh;
      
  img {
    width: 60px ;
  height: 80px ;
  background-blend-mode: multiply ;
}
     
    }
  



    @media screen and (max-width: 500px) {
        
         height: 100%;
        

         img {
        width: 40px ;
      height: 40px ;
      background-blend-mode: multiply ;
    }

        
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

      @media screen and (max-width: 700px) {
            text-align: left;
            button {
              font-size: 14px ;
              padding: 8px 6px ; 
              cursor: pointer;
              color: white;
              background: black;
              margin: 30px 8px 0 0;
              font-weight: bold;
              text-decoration: none;
          
            }
          }
      @media screen and (max-width: 452px) {
        text-align: left;
        margin-left: 0px;
        button {
          font-size: 10px ;
          padding: 5px 8px ; 
          cursor: pointer;
          color: white;
          background: black;
          margin: 10px 0 0 0;
          font-weight: bold;
          text-decoration: none;
     
          }
        }

  

  `
