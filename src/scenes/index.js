
import { Orbit, Model } from './templates'
import { Plane, Box } from '../objects'
import { paragraphs } from '../utils'

const BoxInOrbit = () => {
  return (
    <Orbit>
      <Box />
      <Plane position={[0, 0, 0]} />
    </Orbit>
  )
}

const StarWarsSpeedBike = () => {
  return (
    <Model
      modelPath='./models/starwars-speeder-bike/scene.gltf'
      positionY={0}
    />
  )
}

export const scenes = [
  {
    canvas: <BoxInOrbit />,
    meta: {
      title: 'The Box',
      description: paragraphs(1),
      references: [
        {
          title: 'Three.js',
          link: 'https://threejs.org/'
        },
        {
          title: 'React Three Fiber',
          link: 'https://github.com/pmndrs/react-three-fiber'
        },
        {
          title: 'Poimandres',
          link: 'https://github.com/pmndrs/use-cannon'
        }
      ]
    }
  }, {
    canvas: <StarWarsSpeedBike />,
    meta: {
      title: 'Star Wars Speeder Bike',
      description: paragraphs(1),
      references: [
        {
          title: 'Idmental',
          link: 'https://sketchfab.com/3d-models/starwars-speeder-bike-free-download-1d0ea6fe43c1405b8d4b17722e166f6e'
        },
      ]
    }
  }
]
