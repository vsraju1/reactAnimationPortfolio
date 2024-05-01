import './Navbar.css'
import { motion } from "framer-motion"

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Sidebar from './Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
        <div className="wrapper">
            <motion.div 
            initial={{opacity: 0, scale:.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration:0.5}} 
            className="logo">
                VSR
                </motion.div>
            <div className="navItems">
                <a href="#"><GitHubIcon className='nav__Icon'/></a>
                <a href="#"><LinkedInIcon className='nav__Icon' /></a>
                <a href="#"><InstagramIcon className='nav__Icon'/></a>
                <a href="#"><FacebookIcon className='nav__Icon'/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar