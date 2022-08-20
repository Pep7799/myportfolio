import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const ScrollTop = () => {
  const {pathname} = useLocation();
  useEffect(()=>{
    window.scroll({
      top: 10,
      left:0
    })
  }, [pathname])
 
  return null
}

export default ScrollTop