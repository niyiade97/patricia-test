import React from 'react'
import "./Header.css";
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import CurrencySymbol from "../customElements/currencySymbol/CurrencySymbol";

function Header({data}) {
    const WalletType = ({data}) =>{
        return(
            <div className='wallet-type-wrapper'>
                <CurrencySymbol symType="dark" logo={data.logo} />
                <div className='wallet-text-wrapper'>
                    <p className='wallet-type'>{`${data.type} Wallet`}<span className='dropdown-wrapper'>{<IoIosArrowDropdownCircle />}</span></p>
                    <p className='wallet-description'>{`${data.description}`}</p>
                </div>
            </div>
        )
    }
  return (
    <div className='header-wrapper'>
        <h1>Wallet</h1>
        <WalletType data={data}/>
    </div>
  )
}

export default Header