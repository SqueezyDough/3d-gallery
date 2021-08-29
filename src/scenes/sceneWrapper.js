import styled from 'styled-components'

const Scene = ({ className, children, title, index} ) => {
  return (
    <div className={ className }>
      <span className='index'>{index ? index : 'xx'}.</span>

      <article className='scene'>
        <header>
          <h1>{title ? title : 'Unnamed scene'}</h1>
        </header>

        {children}

        <footer className='scene__description'>
          <h2>Description</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </footer>
      </article>
    </div>
  )
}

export default styled(Scene)`
display: flex;
justify-content: space-between;
flex-direction: column;
position: relative;

@media only screen and (min-width: ${({ theme }) => theme.screens.lg}) {
  flex-direction: row;
  margin-top: ${({ theme }) => theme.spacings.xl};
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

  &__description {
    max-width: 30rem;
  }
}
`
