import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'

const Orbit = ({ className, children }) => {
  return (
    <div className={ className }>
      <Canvas>
        <OrbitControls />
        <ambientLight/>
        <Stars />
        <pointLight position={[10, 10, 10]} />
        <Physics>
          {children}
        </Physics>
      </Canvas>
    </div>
  )
}

export default Orbit
