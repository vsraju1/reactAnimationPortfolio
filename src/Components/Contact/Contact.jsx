import './Contact.css'
import {motion} from 'framer-motion'


const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate:{
        y:0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};


const Contact = () => {
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div  className="item" variants={variants}>
                <h2>Mail</h2>
                <span>raju@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Location</h2>
                <span>Hyderabad</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone:</h2>
                <span>+91 XXXXXX2457</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form >
                <input type="text" placeholder='Name' name="name"/>
                <input type="email" placeholder='Email' name="email"/>
                <textarea rows={6} placeholder='Message' name="message"/>
                <button>submit</button>
            </form>
        </div>
        
    </motion.div>
  )
}

export default Contact