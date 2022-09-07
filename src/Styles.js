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

  .app {
    margin-right: 10px;
    width: 50%;
  }
  
  h1 {
    
    font-size: 40px;
    color: black;
    width: 250px ;
    height: 16vh ;
    
  }

  @media(max-width: 700px) {
    min-height: 90vh;
    display: block;    
    width: 70vh;
    h1 {
      text-align: center;
    
    width: 100%;
  }

  
      
  }

  @media screen and (max-width:452px) {
    min-height:30vh;
    width: 30vh;
  }
  h1 {
  
    width: 100%;
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
      width : 30vh;
      height: 30vh;
      text-align:center;
      margin-left: 20px;
      
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
  @media(max-width: 700px) {
      align-items: center;
      height: 95vh;
      width: 100vh;
     
    }
  


  img {
        width: 60px ;
      height: 80px ;
      background-blend-mode: multiply ;
    }

    @media(max-width: 452px) {
        
         min-height: 50vh;
         width: 150vh;
         margin-left: 3px;
        

         img {
        width: 40px ;
      height: 60px ;
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

      @media(max-width: 700px) {
            text-align: center;
          }

  

  `
