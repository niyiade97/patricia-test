import React,{useState} from 'react'
import "./PaymentOption.css";
import  { Link } from "react-router-dom"
import Btn from '../customElements/btn/Btn';
import { RiBankFill } from 'react-icons/ri';
import { ReactComponent as MobileIcon } from "../../assets/images/mobile.svg";
import { ReactComponent as CardIcon } from "../../assets/images/card.svg";
import { FaGraduationCap } from 'react-icons/fa';

const PaymentOption = () => {
const [isActive, setIsActive] = useState(true);
const btnData = [
    {   
        icon: <RiBankFill />,
        text: "Bank Deposit",
        shadowIsActive: true,
        btnType: "deposit-btn"
    },
    {
        icon: <MobileIcon />,
        text: "USSD Deposit",
        shadowIsActive: true,
        btnType: "deposit-btn"
    },
    {
        icon: <CardIcon />,
        text: "Card Deposit",
        shadowIsActive: true,
        btnType: "deposit-btn"
    },
    {
        icon: <FaGraduationCap />,
        text: "Learn More about Funding your wallet",
        shadowIsActive: false,
        btnType: "custom-btn"
    }
]

const handlePaymentOption = () =>{
    setIsActive(!isActive);
}
  return (
    <div className='payment-option-container'>
        <div className='option-container'>
            <Link to="/deposit" className={`payment-option deposit-option ${isActive && "isActive"}`} onClick={handlePaymentOption}>
                Deposit
            </Link>
            <Link to="/transfer" className={`payment-option transfer-option ${!isActive && "isActive"}`} onClick={handlePaymentOption}>
                Transfer
            </Link>
            {/* <div className=''>
                <p></p>
            </div>
            
            <div  className=''>
                <p></p>
            </div> */}
        </div>
        <div className='option-text-container'>
            <p>Select a method to Fund Naira wallet below</p>
        </div>
        <div className='payment-btn-wrapper'>
            {
                btnData.map((data, index) =>{
                    return(
                        <Btn index={index} data={data}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PaymentOption;