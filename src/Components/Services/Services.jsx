import { useRef } from "react";
import "./Services.css";
import Skills from './Skills'
import { useInView, motion } from "framer-motion";

const variants = {
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
};

const scrollToSection = (item) => {
  const section = document.getElementById(item);

  section.scrollIntoView({ behavior: "smooth" });
};

const Services = () => {
  const ref = useRef();

  // const isInview = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on designing and build
          <br />
          dynamic websites
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <b>Crafting </b>user-friendly
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>Interfaces</b> With precision.
          </h1>
          <button onClick={() => scrollToSection("Portfolio")}>
            Portfolio
          </button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <Skills />
      </motion.div>
    </motion.div>
  );
};

export default Services;
