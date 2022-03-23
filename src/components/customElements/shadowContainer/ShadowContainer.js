import React from 'react'
import "./ShadowContainer.css";

function ShadowContainer(props) {
  return (
    <div className='custom-container' style={{margin: `${props.margin}px 0px`}}>
        {props.children}
        {
        props.shadowIsActive &&
        <>
            <div className="shadow1">

            </div>
            <div className="shadow2">
                
            </div>
        </>
        }  
    </div>
  )
}

export default ShadowContainer