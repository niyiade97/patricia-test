import React from 'react'
import "./Transaction.css"
import { IoDownload } from 'react-icons/io5';
import CurrencySymbol from '../customElements/currencySymbol/CurrencySymbol';

function transaction() {
    const Logo = () =>{
        return(
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.11719 15.26H4.67614V3.56422L11.4859 15.26H14.4044V0H11.8454V11.0342L5.47978 0H2.11719V15.26Z" fill="#006156"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.36816C0 5.7788 0.473422 5.30103 1.05742 5.30103H15.1563C15.7403 5.30103 16.2137 5.7788 16.2137 6.36816C16.2137 6.95752 15.7403 7.43529 15.1563 7.43529H1.05742C0.473422 7.43529 0 6.95752 0 6.36816Z" fill="#006156"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9.92516C0 9.3358 0.473422 8.85803 1.05742 8.85803H15.1563C15.7403 8.85803 16.2137 9.3358 16.2137 9.92516C16.2137 10.5145 15.7403 10.9923 15.1563 10.9923H1.05742C0.473422 10.9923 0 10.5145 0 9.92516Z" fill="#006156"/>
            </svg>
        )
    }
    const transactions = [
        {
            purpose: "Self Withdrawal",
            amount: 0.003,
            time: "Just Now",
            statusText:"success",
        },
        {
            purpose: "Deposit",
            amount: 0.003,
            time: "Today",
            statusText:"pending",
        },
        {
            purpose: "Transfer",
            amount: 0.003,
            time: "Today",
            statusText: "failed",
        },
        {
            purpose: "Deposit",
            amount: 0.003,
            time: "Yesterday",
            statusText: "pending",
        },
        {
            purpose: "Deposit",
            amount: 0.003,
            time: "Yesterday",
            statusText: "pending",
        },
        {
            purpose: "Deposit",
            amount: 0.003,
            time: "Yesterday",
            statusText: "pending",
        },
        {
            purpose: "Deposit",
            amount: 0.003,
            time: "Yesterday",
            statusText: "pending",
        }
    ]
  return (
    <div className='transaction-container'>
        <div className='transaction-inner-container'>
            <div className='transaction-table-wrapper'>
                <div className='transaction-header-container'>
                    <div>
                        <p className='transaction-header-text'>Recent Activity</p>
                    </div>
                    <div className='search-transaction-wrapper'>
                        <input type="date" name="data" className="search-transaction-date" />
                        <i className='transaction-download'><IoDownload /></i>
                    </div>
                </div>
                <div className='transaction-table'>
                {
                    transactions.map((data) =>{
                        return(
                            <div className='transaction-wrapper'>
                                <div className='transaction-purpose'>
                                    <CurrencySymbol symbolType="normal" logo={<Logo />}/>
                                    <p>{data.purpose}</p>
                                </div>
                                <div className='transaction'>
                                    <p>{`${data.amount} BTC`}</p>
                                </div>
                                <div className='transaction'>
                                    <p>{data.time}</p>
                                </div>
                                <div className={`transaction-status ${data.statusText}`}>
                                    <p>{data.statusText.charAt(0).toUpperCase() + data.statusText.slice(1)}</p>
                                </div>
                            </div>
                        )
                    })
                }
                    
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default transaction