import { scale } from "framer-motion"

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export const tapButton = {
  whileTap: { scale: 0.95 }
}

export const hoverCard = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 }
}

export const fadeSlide = {
    hidden: {opacity:0, y: -10},
    show:{opacity:1, y: 0},
}

export const hoverInput = {
    whileFocus: {scale: 1.01}
}