import { containerVariants } from '@/lib/animation'
import { motion } from 'framer-motion'
import React from 'react'

const MotionWrapper = ({children}) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
        {children}
    </motion.div>
  )
}

export default MotionWrapper;