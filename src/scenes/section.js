import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { noop } from '../utils'

const Section = ({ className, scene, index, wallpaper }) => {
  const [isFullscreen, setToFullsceen] = useState(false)

  const containerVariants = {
    fullscreen: {
      maxWidth: 'unset',
    },
    initial: {
      maxWidth: '1440px',
    }
  }

  const wallpaperVariants = {
    fullscreen: {
      left: 0,
      top: 0,
      height: '100vh',
      minWidth: '100vw'
    },
    initial: {
      transform: 'translate(-50%, -50%)',
      left: '60%',
      top: '50%',
      height: '30rem',
      minWidth: '50rem'
    }
  }

  return (
    <AnimateSharedLayout>
      <motion.article
        className={ className }
        variants={ containerVariants }
        animate={ isFullscreen ? 'fullscreen' : 'initial' }
      >
        <header className='scene__header'>
          <span className='scene__header__index'>{index}.</span>
          <h1 className='scene__header__title'>{scene.meta.title ? scene.meta.title : 'Unnamed scene'}</h1>
        </header>

        <main
          className='scene__canvas'
        >
          <motion.div
            className='scene__canvas__wallpaper'
            onClick={() => setToFullsceen(isFullscreen => !isFullscreen)}
            variants={ wallpaperVariants }
          >
            <motion.div
              className='scene__canvas__wallpaper__inner'
              whileHover={{ scale: [1, 1.2, 1.1], }}
              style={wallpaper}
            />
          </motion.div>

          <div className='scene__canvas__inner'>
            {console.log(scene.canvas)}
            {scene.canvas}
          </div>
        </main>

        {/* Show metadata if available  */}
        {scene.meta ? (
          <footer className='scene__meta'>
            <div className='scene__meta__description'>
              <h2>Description</h2>
              <p>{scene.meta.description}</p>
            </div>
            {scene.meta.references ? (
              <div className='scene__meta__references'>
              <h2>References</h2>
              <ul>
                {scene.meta.references.map((reference, index) => {
                  return <li key={index}>
                    <a href={reference.link} target='_blank' rel="noreferrer">
                      {reference.title}
                    </a>
                  </li>
                })}
              </ul>
            </div>
          ) : noop()}
        </footer>
        ) : noop()}
      </motion.article>
    </AnimateSharedLayout>
  )
}

export default styled(Section)`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 100vh;
margin: 0 auto;
padding-top: 160px;
position: relative;

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
}

.scene__canvas {
  position: absolute;
  margin-top: -8rem;
  width: 100%;

  &__inner {
    pointer-events: none;

    canvas {
      pointer-events: none;
      min-height: 100vh;
    }
  }

  &__wallpaper {
    position: absolute;
    z-index: 0;

    &__inner {
      height: 100%;
      border-radius: 24px;
    }
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
  pointer-events: none;

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
`
