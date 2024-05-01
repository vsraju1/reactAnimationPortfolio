import {motion} from 'framer-motion'


const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};


const Links = ({closeSideBar}) => {
  const linkItems = ["Homepage", "Services", "Portfolio", "Contact"]

  const scrollToSection = (item) => {
    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeSideBar(); // Close the sidebar after scrolling
  };

  return (
    <motion.div className="links" variants={variants}>
      {linkItems.map(item=>(
        <motion.a 
        href={`#${item}`} 
        key={item} 
        variants={itemVariants} 
        whileHover={{scale: 1.1}} 
        whileTap={{scale: 0.95}}
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(item)
        }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links