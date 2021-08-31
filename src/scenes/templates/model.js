import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'
import styled from 'styled-components'

const ModelObject = ({ modelPath }) => {
  const gltf = useGLTF(modelPath, true)
  return <primitive object={gltf.scene} dispose={null} />
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[0, 10, 0]} intensity={1.5} />
      <spotLight position={[1000, 1000, 0]} intensity={1} />
    </>
  )
}

const HTMLContent = ({children, modelPath, positionY}) => {
  const ref = useRef()
  useFrame(() => ref.current.rotation.y += 0.01)

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={ref} position={[0, positionY, 0]}>
        <ModelObject modelPath={modelPath} />
      </mesh>
      <Html fullscreen>
        {children}
      </Html>
    </group>
  )
}

const Model = ({ className, modelPath, positionY }) => {
  return (
    <div className={ className }>
      <Canvas
        colorManagement
        camera={{position: [0, 0, 200], fov: 70}}
      >
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            modelPath={modelPath}
            positionY={positionY}>
              <h1>Title</h1>
          </HTMLContent>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default styled(Model)`
`

