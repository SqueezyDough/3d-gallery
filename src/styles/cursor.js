// adopted from: https://medium.com/swlh/cool-custom-cursors-with-react-framer-motion-part-1-228126bcae68
import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styled from 'styled-components'

const Cursor = ({ className }) => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 600 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <motion.div
        className={className}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </>
  )
}

export default styled(Cursor)`
  position: fixed;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: whitesmoke;
  mix-blend-mode: difference;
  z-index: 999;
  pointer-events: none;
`