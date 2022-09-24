import styled from 'styled-components'
import {motion} from 'framer-motion'




export const About1 = styled(motion.section) `
  height: 90vh; 
  align-items: center;
  display: flex;
  background: #9BD8F3;
  padding-left: 30px ;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 0px;

  .app {
    margin-right: 10px;
    width: 80%;
  }
  
  h1 {
    
    font-size: 60px;
    color: black;
    margin-bottom: 9px;
    
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    text-align: left;
    width: 100%;

    h1 {
    
    
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

  
  @media screen and (max-width: 500px) {
    font-size: 16px ;
   
    
  }

 

`

export const Image1 = styled.section `
  margin-top: 30px;
  overflow: hidden;

  img {
  background:#9BD8F3;
  width : 80%;
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
      padding-left: 0px;
      width: 200px ;
      font-size: 17px;
      margin-bottom: 30px ;
      text-align: left;
    }

    
 
}
    

` 


export const Connect = styled(motion.div) `
  margin-left: 30px;
  @media screen and (max-width: 700px) {
      align-items: center;
      height: 95vh;
      width: 150%;
      margin-left: 0px;
 
     
    }
       
    img {
    width: 60px ;
  height: 80px ;
  background-blend-mode: multiply ;
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
    padding: 12px 30px; 
    cursor: pointer;
    color: white;
    background: black;
    margin: 30px 8px 0 0;
    font-weight: bold;
    text-decoration: none;
    border-radius: 24px 4px;

    @media (max-width:900px){
    align-items:center;
    justify-content:center;

  };

  

   

  &:hover {
      color: black;
      background: #9BD8F3;

  }

  
}
/*
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
*/
  

  `
