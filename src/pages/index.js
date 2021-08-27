import Box from '../scenes/example/box'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <>
      <header>
        {/* TODO: Build header component */}
      </header>
      <main>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </main>

      <footer>
        {/* TODO: Build footer component */}
      </footer>
    </>
  )
}
