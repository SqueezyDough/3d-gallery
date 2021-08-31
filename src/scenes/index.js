
import { Orbit, Model } from './templates'
import { Plane, Box } from '../objects'
import { paragraphs } from '../utils'

const StarWarsSpeedBike = () => {
  return (
    <Model
      modelPath='./models/starwars-speeder-bike/scene.gltf'
      positionY={0}
      positionZ={450}
    />
  )
}

export const scenes = [
  {
    canvas: <StarWarsSpeedBike />,
    wallpaper: {
      background: 'radial-gradient(circle, rgba(233,209,114,1) 0%, rgba(221,175,87,1) 100%);'
    },
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
