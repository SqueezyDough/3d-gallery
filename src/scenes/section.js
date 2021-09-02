import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { useAppContext } from '../context'
import ReferenceList from '../components/referenceList'
import { noop } from '../utils'

const Section = ({ className, scene, index }) => {
  const { fullscreen, toggleFullscreen } = useAppContext()

  const variants = {
    fullscreen: {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
    },
    initial: {
      x: '-50%',
      y: '-50%',
      top: '50%',
      left: '60%',
      height: '30rem',
      width: '50rem',
      borderRadius: '24px'
    }
  }

  return (
    <article className={ className }>
      <header className='scene__header'>
        <span className='scene__header__index'>{index}.</span>
        <h1 className='scene__header__title'>{scene.meta.title ? scene.meta.title : 'Unnamed scene'}</h1>
        <motion.div
          className='scene__header__references'
          animate={ fullscreen ? {display: 'none'} : {display: 'block'} }
          >
          <h2>References</h2>
          <ReferenceList references={scene.meta.references} />
        </motion.div>
      </header>

      <main className='scene__canvas' >
          { scene.canvas }
      </main>

      {/* Show metadata if available  */}
      {scene.meta ? (
        <motion.footer
          className='scene__meta'
          animate={ fullscreen ? {display: 'flex'} : {display: 'none'} }
        >
          <div className='scene__meta__description'>
            <h2>Description</h2>
            <p>{scene.meta.description}</p>
          </div>
          <div className='scene__meta__references'>
            <h2>References</h2>
            <ReferenceList references={scene.meta.references} />
          </div>
        </motion.footer>
      ) : noop()}

      <motion.div
        className='scene__wallpaper hoverable'
        variants={ variants }
        animate={ fullscreen ? 'fullscreen' : 'initial' }
        style={scene.wallpaper}
        // whileHover={!fullscreen ? { scale: [1, 1.2, 1.1] } : noop()}
        onClick={() => toggleFullscreen()}
      />
    </article>
  )
}

export default styled(Section)`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 100vh;
overflow: hidden;
position: relative;
padding-top: 160px;

@media only screen and (min-width: ${({ theme }) => theme.screens.xl}) {
  padding-top: 0;
}

.scene__header {
  z-index: 10;
  pointer-events: none;
  mix-blend-mode: difference;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.screens.xl};

  &__index, &__title {
    font-family: ${({ theme }) => theme.fonts.headerBoldItalic};
    color: ${({ theme }) => theme.colors.white};
  }

  &__index {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  &__title {
    margin-top: 0rem;
    max-width: ${({ theme }) => theme.screens.md};
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }

  &__references {
    color: ${({ theme }) => theme.colors.white};
  }
}

.scene__canvas {
  position: absolute;
  pointer-events: none;

  canvas {
    position: relative;
    z-index: 10;
    height: 100vh;
    width: 100%;
  }
}

.scene__meta {
  position: relative;
  z-index: 10;
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.screens.xl};
  padding: ${({ theme }) => theme.spacings.xl} 0;
  color: ${({ theme }) => theme.colors.white};
  mix-blend-mode: difference;

  @media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;

    &__references {
      margin: 0 ${({ theme }) => theme.spacings.xl}
    }
  }

  &__description {
    max-width: 30rem;
  }
}

.scene__wallpaper {
  position: absolute;
  z-index: 1;
}
`
