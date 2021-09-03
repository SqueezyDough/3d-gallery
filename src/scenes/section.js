import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useAppContext, useWindowDimensions } from '../context'
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
      minHeight: '100vh',
      maxHeight: '100%',
      width: '100vw',
    },
    initial: {
      x: '-50%',
      y: '-50%',
      top: '50%',
      left: '50%',
      minHeight: '30rem',
      width: '30rem',
      borderRadius: '50%'
    }
  }

  return (
    <article className={ className }>
      <header className='scene__header'>
        <span className='scene__header__index'>{index}.</span>
        <h1 className='scene__header__title'>{scene.meta.title ? scene.meta.title : 'Unnamed scene'}</h1>
      </header>

      <main className='scene__canvas'>
        <div className='scene__canvas__inner'>
          { scene.canvas }
        </div>
      </main>

      <motion.div
        className='scene__references'
        animate={ fullscreen ? {display: 'none'} : {display: 'block'} }
        >
        <h2>References</h2>
        <ReferenceList references={scene.meta.references} />
      </motion.div>

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
        onClick={() => toggleFullscreen()}
      />
    </article>
  )
}

export default styled(Section)`
display: flex;
flex-direction: column;
justify-content: space-evenly;
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
  padding: ${({ theme }) => theme.spacings.sm};
  width: 100%;
  max-width: ${({ theme }) => theme.screens.xl};

  @media only screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    padding: 0;
  }

  &__index, &__title {
    font-family: ${({ theme }) => theme.fonts.headerBoldItalic};
    color: ${({ theme }) => theme.colors.white};
  }

  &__index {
    display: none;

    @media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
      display: block;
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }

  &__title {
    margin-top: 0rem;
    max-width: ${({ theme }) => theme.screens.md};
    font-size: ${({ theme }) => theme.fontSize.xl};

    @media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }
}

.scene__references {
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.screens.xl};
  padding: ${({ theme }) => theme.spacings.sm};
  color: ${({ theme }) => theme.colors.white};

  @media only screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    padding: 0;
  }
}

.scene__canvas {
  width: 100%;
  pointer-events: none;

  &__inner {
    position: absolute;
    z-index: 100;
    top: 0;
    height: 100%;
    width: 100%;
  }

  canvas {
    height: 100%;
    width: 100%;
  }
}

.scene__meta {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.sm};
  width: 100%;
  max-width: ${({ theme }) => theme.screens.xl};
  color: ${({ theme }) => theme.colors.white};
  mix-blend-mode: difference;

  @media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: row;
    padding: ${({ theme }) => theme.spacings.sm};

    &__references {
      margin: 0 ${({ theme }) => theme.spacings.xl};
    }
  }

  &__description {
    max-width: 30rem;
  }
}

.scene__wallpaper {
  position: absolute;
  height: 100%;
  max-height: 30rem;
}
`
