import { delay, motion } from "framer-motion"

import './Sidebar.css'
import Links from './Links/Links'
import ToggleBtn from './ToggleBtn/ToggleBtn'
import { useState } from 'react'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const custVariants ={
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: 'spring',
                stiffness: 20,
            },
        },
        closed:{
            clipPath: "circle(20px at 50px 50px)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={custVariants}>
            <Links className='links' closeSideBar={() => setOpen(false)}/>
        </motion.div>
        <ToggleBtn setopen={setOpen} className='toggleBtn'/>
    </motion.div>
  )
}

export default Sidebar