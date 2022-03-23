import { MdSpaceDashboard, MdOutlineHelp } from 'react-icons/md';
import { GiWallet } from 'react-icons/gi';
import { FiActivity } from 'react-icons/fi';
import { SiCodesandbox } from 'react-icons/si';
import { IoGiftSharp } from 'react-icons/io5';

export const sideBarData = [
    {
      icon: MdSpaceDashboard,
      text: "Dashboard",
      path: "/"
    },
    {
      icon: FiActivity,
      text: "Activity",
      path: "/activity"
    },
    {
      icon: GiWallet,
      text: "Wallet",
      path: "/wallet"
    },
    {
      icon: SiCodesandbox,
      text: "Products",
      path: "/products"
    },
    {
      icon: IoGiftSharp,
      text: "Referrals",
      path: "/referrals"
    },
    {
      icon: MdOutlineHelp,
      text: "Help Center",
      path: "/help-center"
    }
  ] 