// adopted from: https://medium.com/swlh/cool-custom-cursors-with-react-framer-motion-part-1-228126bcae68
import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styled from 'styled-components'

const Cursor = ({ className }) => {
  // starting cursor position
  const cursorX = useMotionValue(-100),
        cursorY = useMotionValue(-100),
        InnerCursorX = useMotionValue(-100),
        InnerCursorY = useMotionValue(-100)

  // cursor behaviour
  const cursorSpringConfig = { damping: 20, stiffness: 250 }
  const cursorXSpring = useSpring(cursorX, cursorSpringConfig)
  const cursorYSpring = useSpring(cursorY, cursorSpringConfig)

  // inner cursor behaviour
  const InnerCursorSpringConfig = { damping: 30, stiffness: 600 }
  const InnerCursorXSpring = useSpring(InnerCursorX, InnerCursorSpringConfig)
  const InnerCursorYSpring = useSpring(InnerCursorY, InnerCursorSpringConfig)

  // state management
  const [linkHovered, setLinkHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  const moveCursor = (e) => {
    cursorX.set(e.clientX - 16)
    cursorY.set(e.clientY - 16)
  }

  const moveInnerCursor = (e) => {
    InnerCursorX.set(e.clientX - 8)
    InnerCursorY.set(e.clientY - 8)
  }

  const onMouseDown = () => {
    setClicked(true)
  }
  const onMouseUp = () => {
    setClicked(false)
  }

  // add class for all clickable elements
  // add hoverable to an element to explicity add the animation
  const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, .hoverable').forEach(el => {
      el.addEventListener('mouseover', () => setLinkHovered(true))
      el.addEventListener('mouseout', () => setLinkHovered(false))
    })
  }

  const addEventListeners = () => {
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousemove', moveInnerCursor)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
  }

  const removeEventListeners = () => {
    window.removeEventListener('mousemove', moveCursor)
    window.removeEventListener('mousemove', moveInnerCursor)
    window.removeEventListener('mousedown', onMouseDown)
    window.removeEventListener('mouseup', onMouseUp)
  }

  const variants = {
    clicked: {
      scale: [1, 2, 1.5],
    },
    hovered: {
      scale: [1, 4, 4, 3, 3],
      borderRadius: ['20%', '30%', '40%', '50%'],
      rotate: [0, 0, 270],
      transition: {duration: 1}
    },
    default: {
      borderRadius: '50%',
    }
  }

  return (
    <div className={ className }>
      <motion.div
        className='cursor'
        animate={[
          clicked ? 'clicked' : 'default',
          linkHovered ? 'hovered' : 'default'
        ]}
        variants={variants}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
      <motion.div
        className='cursor -inner'
        style={{
          left: InnerCursorXSpring,
          top: InnerCursorYSpring,
        }}
      />
    </div>
  )
}

export default styled(Cursor)`
.cursor {
  position: fixed;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  mix-blend-mode: difference;
  z-index: 10;
  pointer-events: none;
}

.-inner {
  width: 8px;
  height: 8px;
  transform: translate(50%, 50%);
}
`