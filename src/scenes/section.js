import styled from 'styled-components'
import { noop } from '../utils'

const Section = ({ className, scene, index, wallpaper }) => {
  return (
    <article className={ className }>
      <header className='scene__header'>
        <span className='scene__header__index'>{index}.</span>
        <h1 className='scene__header__title'>{scene.meta.title ? scene.meta.title : 'Unnamed scene'}</h1>
      </header>

      <main className='scene__canvas'>
        {scene.canvas}

        <div className='scene__canvas__wallpaper' style={wallpaper} />
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
    </article>
  )
}

export default styled(Section)`
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
max-width: ${({ theme }) => theme.screens.xl};
min-height: 100vh;
margin: 0 auto;
padding-top: 160px;

.scene__header {
  z-index: 10;
  pointer-events: none;
  mix-blend-mode: difference;
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

  canvas {
    min-height: 100vh;
  }

  &__wallpaper {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    height: 30rem;
    min-width: 50rem;
    z-index: -1;
    border-radius: 15px;
  }
}

.scene__meta {
  position: relative:
  z-index: 10;
  padding: ${({ theme }) => theme.spacings.lg} 0;
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
`
