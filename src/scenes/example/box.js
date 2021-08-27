//adopted from https://github.com/pmndrs/react-three-fiber


import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = props => {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.02))
  // Return the view, these are regular Threejs elements expressed in JSX

  return (
    <>
      Mesh
      <mesh
        {...props}
        ref={ref}
        scale={active ? 1.5 : 1}
        onClick={event => setActive(!active)}
        onPointerOver={event => setHover(true)}
        onPointerOut={event => setHover(false)}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={hovered ? 'black' : 'white'} />
      </mesh>
    </>
  )
}

export default Box