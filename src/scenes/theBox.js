import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import styled from 'styled-components'
import Box from '../objects/box'
import Plane from '../objects/plane'

const TheBox = ({ className }) => {
  return (
    <div className={ className }>
      <Canvas>
        <OrbitControls />
        <ambientLight/>
        <Stars />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          <Box />
          <Plane position={[0, 0, 0]} />
        </Physics>
      </Canvas>
    </div>
  )
}

export default styled(TheBox)`
background-color: ${({ theme }) => theme.black};
`
