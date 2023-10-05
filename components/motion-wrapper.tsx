'use client'
import {motion} from 'framer-motion'

export default function MotionWrapper({children, div, ...props} : any) {
    const Comp = div ? motion.div : motion.section;
    return (
        <Comp {...props}>
            {children}
        </Comp>
    )
}
