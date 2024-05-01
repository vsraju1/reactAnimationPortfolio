import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Hero.css";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbtn: {
    y: 6,
    transition: {
      duration: 1.2,
      repeat: Infinity,
    },
  },
};

const hero__bgSliding = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="wrapper">
          <div>
            <motion.div
              className="hero__text"
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              <motion.h2 variants={textVariants}>V Shanmukha Raju</motion.h2>
              <motion.h1 variants={textVariants}>
                Web developer and UI designer
              </motion.h1>
              <motion.div variants={textVariants} className="buttons">
                <button variants={textVariants}>See the latest works</button>
                <button variants={textVariants}>Contant me</button>
              </motion.div>
              <motion.div variants={textVariants} animate="scrollbtn">
                <ArrowDownwardIcon className="hero__scroll" />
              </motion.div>
              <motion.div className="toparr"></motion.div>
            </motion.div>
          </div>
          <motion.div
            className="hero__bgSliding"
            variants={hero__bgSliding}
            initial="initial"
            animate="animate"
          >
            Front-End React Developer
          </motion.div>
        </div>
        <div className="hero__img">
          <img src="/profile_img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
