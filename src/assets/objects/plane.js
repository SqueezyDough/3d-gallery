//adopted from https://github.com/pmndrs/react-three-fiber
import React from 'react'
import { usePlane } from '@react-three/cannon'

const Plane = props => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }))
  return (
    <>
      <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} {...props}>
        <planeGeometry attach='geometry' args={[100, 100]} />
        <meshLambertMaterial attach='material' color='white' />
      </mesh>
    </>
  )
}

export default Plane