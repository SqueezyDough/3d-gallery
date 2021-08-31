import styled from 'styled-components'
import { noop } from '../utils'

const Section = ({ className, scene, index }) => {
  return (
    <div className={ className }>
      <span className='index'>{index}.</span>

      <article className='scene'>
        <header>
          <h1>{scene.meta.title ? scene.meta.title : 'Unnamed scene'}</h1>
        </header>

        <main>
          {scene.canvas}
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
    </div>
  )
}

export default styled(Section)`
display: flex;
justify-content: space-between;
flex-direction: column;

@media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
  flex-direction: row;
  padding-top: ${({ theme }) => theme.spacings.xl};
}

.index {
  font-family: ${({ theme }) => theme.fonts.headerBoldItalic};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.black};

  @media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    margin-right: ${({ theme }) => theme.spacings.sm};
  }
}

header {
  position: relative;
  pointer-events: none;
  width: 100%;

  h1 {
    position: absolute;
    top: 2rem;
    left: 50%;
    z-index: 10;
    margin: 0;
    width: 100%;
    text-align: center;
    transform: translateX(-50%);
    font-family: ${({ theme }) => theme.fonts.headerBoldItalic};
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.white};
    mix-blend-mode: difference;

    @media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }
}

.scene {
  width: 100%;
  overflow: hidden;

  canvas {
    min-height: 40rem;
  }

  &__meta {
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
}
`
