import React, {useState} from 'react'
import "./Btn.css";
import { IoMdArrowDropright } from 'react-icons/io';
import ShadowContainer from '../shadowContainer/ShadowContainer';

function Btn(props) {
  const [ opacity, setOpacity ] = useState(0.5)
  const handleMouseOver = () =>{
    setOpacity(1);
  }
  const handleMouseOut = () =>{
    setOpacity(.3);
  }
  return (
    <ShadowContainer shadowIsActive={props.data.shadowIsActive} margin="30">
      <div className={`custom-btn-wrapper ${props.data.btnType}`} onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
        <div className='custom-text-wrapper'>
            <div className='custom-icon-wrapper'>
              <i>{props.data.icon}</i>
            </div>
              <p>{props.data.text}</p>
        </div>
      <div>
        <i style={{opacity: opacity}}><IoMdArrowDropright /></i>
      </div>
      </div>
    </ShadowContainer>
      
    
    
  )
}

export default Btn;