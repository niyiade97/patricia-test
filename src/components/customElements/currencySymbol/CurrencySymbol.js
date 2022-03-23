import React from 'react'
import "./CurrencySymbol.css"

function CurrencySymbol(props) {
  return (
    <div className={`wallet-type-logo ${props.symbolType}`}>
        <i>{props.logo}</i>
    </div>
  )
}

export default CurrencySymbol;