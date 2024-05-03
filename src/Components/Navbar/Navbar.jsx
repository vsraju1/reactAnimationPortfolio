import "./Navbar.css";
import { motion } from "framer-motion";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Sidebar from "./Sidebar/Sidebar";

const textVariants = {
  scrollbtn: {
    y: -1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          VSR
        </motion.div>
        <div className="navItems">
          <a href="https://github.com/vsraju1">
            <GitHubIcon className="nav__Icon" />
          </a>
          <a href="www.linkedin.com/in/vs-raju">
            <LinkedInIcon className="nav__Icon" />
          </a>
          <a href="https://www.instagram.com/vs_raju7">
            <InstagramIcon className="nav__Icon" />
          </a>
          <a href="">
            <FacebookIcon className="nav__Icon" />
          </a>
        </div>
      </div>
      <div className="top">
        <motion.a
          onClick={() => scrollToSection('Homepage')}
          className="toparr"
          variants={textVariants}
          animate="scrollbtn"
        >
          <KeyboardArrowUpIcon />
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
