//adopted from https://github.com/pmndrs/react-three-fiber
import React, { useState } from 'react'
import { useBox } from '@react-three/cannon'

const Box = props => {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 10, 0] }))
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <>
      <mesh
        {...props}
        ref={ref}
        scale={active ? 1.5 : 1}
        onClick={event => {
          setActive(!active)
          api.velocity.set(0,2,0)
        }}
        onPointerOver={event => setHover(true)}
        onPointerOut={event => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'white' : 'red'} />
      </mesh>
    </>
  )
}

export default Box