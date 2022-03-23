import React from 'react'
import DashboardLayout from "../utils/layout/dashboardLayout/DashboardLayout";
import Header from '../components/header/Header';
import {ReactComponent as Logo} from "../assets/images/nairaLogo.svg";
import { ReactComponent as WithdrawalIcon } from "../assets/images/withdrawal.svg"
import { ReactComponent as RequestIcon } from "../assets/images/request.svg"
import Notification from '../components/notification/Notification';
import PaymentOption from "../components/paymentOption/PaymentOption";
import ShadowContainer from '../components/customElements/shadowContainer/ShadowContainer';
import graph from "../assets/images/statImage.svg";
import Btn from '../components/customElements/btn/Btn';
import Transaction from '../components/transactions/Transaction';
function Dashboard() {

    const walletType = {
        type: "Naira",
        logo: <Logo />,
        description: "Lorem Ipsum dolor sit amet"
    }
    const btnData = [
        {   
            icon: <RequestIcon />,
            text: "Request Money",
            shadowIsActive: false,
            btnType: "withdrawal-btn"
        },
        {
            icon: <WithdrawalIcon />,
            text: "Cardless Withdrawal",
            shadowIsActive: false,
            btnType: "withdrawal-btn"
        }
    ]
    
    const WalletStat = () =>{
        return(
            <ShadowContainer shadowIsActive={true} margin="0">
                <div className='stat-container'>
                    <div className='stat-amount-container'>
                        <div>
                            <p className='stat-amount-header'>Total Balance</p>
                            <h1 className='stat-amount'>₦89,153,001.73</h1>
                            <p className='stat-label'>Book Balance: ₦450,000.093</p>
                        </div>
                    </div>
                    <div className='stat-container-line'>
                        <div className='stat-line'>
                        </div>
                    </div>
                    <div className='stat-yearly-container'>
                        <div className='stat-graph-container'>
                            <div className='stat-graph-wrapper'>
                                <img src={graph} alt="stat-graph" className='graph-img'/>
                            </div>
                        </div>
                        <div className='stat-amount-flow'>
                            <div>
                                <p>Outflow</p>
                                <h1>₦20,000</h1>
                            </div>
                            <div>
                                <p>Inflow</p>
                                <h1>₦20,000</h1>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </ShadowContainer>
        )
    }

    return (
    <DashboardLayout>
        <div className='dashboard-body-wrapper'>
            <Header data={walletType} />
            <WalletStat />
            <div className='withdrawal-options'>
            {
                btnData.map((data, index) =>{
                    return(
                        <div className='withdrawal-options-wrapper'>
                            <Btn index={index} data={data}/>
                        </div>
                    )
                })
            } 
            </div>
            <Transaction />
        </div>
        <div className='funding-type-wrapper'>
            <Notification />
            <PaymentOption />
        </div>
    </DashboardLayout>
    )
}

export default Dashboard