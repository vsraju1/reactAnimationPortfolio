import { useRef } from 'react'
import './Portfolio.css'

import {motion, useScroll, useSpring, useTransform} from 'framer-motion'


const Projects = [
    {
        id: 1,
        title: "VPFW",
        img: "/vpfw.png",
        desc: "Built using html, css and a little javascript only. This site has created for a company which proivdes fabrication services. This project was done during my initial days of learnig web development.",
        url: "https://vsraju1.github.io/VPFW/"
    },
    {
        id: 2,
        title: "LinkedIn Clone",
        img: "/linkedin.png",
        desc: "This project is totally focused on learnig and creating components in React to implement dynamic user interface. Redux was used to manage states. Though this project is not fully resposnvie.",
        url: "https://linkedin-clone-388b1.web.app/"
    }
]

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0,1], [-200, 200])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>

                <img src={item.img} alt="" />
                    </div>
                <div className="textContainer" >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button><a href={item.url}>See demo</a>
                        </button>
                </div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:['end end', 'start start']
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {Projects.map(item => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio