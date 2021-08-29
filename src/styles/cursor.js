// adopted from: https://medium.com/swlh/cool-custom-cursors-with-react-framer-motion-part-1-228126bcae68
import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styled from 'styled-components'
import classNames from 'classnames'

const Cursor = ({ className }) => {
  // cursor x and y position
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const InnerCursorX = useMotionValue(-100)
  const InnerCursorY = useMotionValue(-100)

  // cursor behaviour
  const cursorSpringConfig = { damping: 20, stiffness: 250 }
  const cursorXSpring = useSpring(cursorX, cursorSpringConfig)
  const cursorYSpring = useSpring(cursorY, cursorSpringConfig)

  // inner cursor behaviour
  const InnerCursorSpringConfig = { damping: 30, stiffness: 600 }
  const InnerCursorXSpring = useSpring(InnerCursorX, InnerCursorSpringConfig)
  const InnerCursorYSpring = useSpring(InnerCursorY, InnerCursorSpringConfig)

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

  const cursorClasses = classNames(
    className,
    'cursor',
    {
      'cursor--clicked': clicked,
      'cursor--link-hovered': linkHovered
    }
  )

  return (
    <>
      <motion.div
        className={ cursorClasses }
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
      />
      <motion.div
        className='cursor--inner'
        style={{
          left: InnerCursorXSpring,
          top: InnerCursorYSpring,
        }}
      />
    </>
  )
}

export default styled(Cursor)`
transition: ${({ theme }) => theme.transition};
transition-property: transform, background-color, mix-blend-mode;

&.cursor {
  position: fixed;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  mix-blend-mode: difference;
  z-index: 10;
  pointer-events: none;

  &.cursor--clicked {
    transform: scale(0.8);
  }

  &.cursor--link-hovered {
    transform: scale(3);
    background-color: red;
    opacity: .6;
  }

  ~ .cursor--inner {
    position: fixed;
    width: 8px;
    height: 8px;
    // align to outer cursor center
    transform: translate(50%, 50%);
    border-radius: 50%;
    background-color: white;
    mix-blend-mode: difference;
    z-index: 10;
    pointer-events: none;
  }
}
`