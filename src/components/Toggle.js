import React, {useState} from 'react';

const Toggle = ({chldren}) => {
  
    
    const [toggle, setToggle] = useState(true);
    return (
    <div onClick={() => setToggle(!toggle)}>{toggle ? chldren : ''}</div>
  )
}

export default Toggle