import { useRef } from 'react'
import './Services.css'
import {useInView, motion} from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {
    const ref = useRef()

    const isInview = useInView(ref, {margin:"-200px"})

  return (
    <motion.div 
    className='services' 
    variants={variants} 
    initial="initial" 
    //whileInView="animate"
    animate={isInview && "animate"}
    ref={ref}
    >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on helping your brand grow
                <br />and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><b>Unique </b>Ideas</h1>
            </div>
            <div className="title">
                <h1><b>For Your</b> Business.</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
           <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consectetur sit vero laudantium quidem totam?</p>
            <button>Go</button>
            </motion.div> 
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consectetur sit vero laudantium quidem totam?</p>
            <button>Go</button>
            </motion.div> 
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe consectetur sit vero laudantium quidem totam?</p>
            <button>Go</button>
            </motion.div> 
        </motion.div>
    </motion.div>
  )
}

export default Services