import styled from 'styled-components'

const Scene = ({ className, children, title} ) => {
  return (
    <div className={ className }>
      <header>
        <h1>{title ? title : 'Unnamed scene'}</h1>
      </header>

      <div className='scene'>{children}</div>
    </div>
  )
}

export default styled(Scene)`
header {
  position: absolute;
  pointer-events: none;
  width: 100%;

  h1 {
    position: relative;
    z-index: 99;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-align: center;
    color: white;
    mix-blend-mode: difference;
  }
}

.scene canvas{
  min-height: 40rem;
}
`
