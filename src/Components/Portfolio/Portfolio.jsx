import { useRef } from 'react'
import './Portfolio.css'

import {motion, useScroll, useSpring, useTransform} from 'framer-motion'


const Projects = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/20259377/pexels-photo-20259377/free-photo-of-a-small-wooden-house-on-a-pier-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates doloribus assumenda tempore fugiat libero cupiditate rerum soluta aspernatur sed enim?"
    },
    {
        id: 2,
        title: "Html and CSS only",
        img: "https://images.pexels.com/photos/20485059/pexels-photo-20485059/free-photo-of-a-person-riding-a-dirt-bike-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates doloribus assumenda tempore fugiat libero cupiditate rerum soluta aspernatur sed enim?"
    },
    {
        id: 3,
        title: "Vannila JS",
        img: "https://images.pexels.com/photos/21974391/pexels-photo-21974391/free-photo-of-product-photography.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates doloribus assumenda tempore fugiat libero cupiditate rerum soluta aspernatur sed enim?"
    },
    {
        id: 4,
        title: "Netflix Clone",
        img: "https://images.pexels.com/photos/20370117/pexels-photo-20370117/free-photo-of-nazare.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates doloribus assumenda tempore fugiat libero cupiditate rerum soluta aspernatur sed enim?"
    },
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
                <motion.div className="textContainer" style={{y}} >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See demo</button>
                </motion.div>
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