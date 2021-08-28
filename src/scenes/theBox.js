import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import styled from 'styled-components'
import Box from '../objects/box'
import Plane from '../objects/plane'

const TheBox = ({ className }) => {
  return (
    <div className={ className }>
      <header>
        <h1>The Box</h1>
      </header>

      <Canvas>
        <OrbitControls />
        <ambientLight/>
        <Stars />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          <Box position={[0, 2, 0]} />
          <Plane position={[0, 0, 0]} />
        </Physics>
      </Canvas>
    </div>
  )
}

export default styled(TheBox)`
header {
  position: absolute;
  pointer-events: none;
  width: 100%;

  h1 {
    position: relative;
    z-index: 99;
    font-size: ${({ theme }) => theme.fontSizeXXL};
    text-align: center;
    mix-blend-mode: difference;
  }
}
`
