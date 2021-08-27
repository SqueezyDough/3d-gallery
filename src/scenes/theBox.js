import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Box from '../objects/box'
import Plane from '../objects/plane'

const TheBox = () => {
  return (
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
  )
}

export default TheBox
