
import { Model } from './templates'
import { paragraphs } from '../utils'

const BD1 = () => {
  return (
    <Model
      modelPath='./models/bd-1/scene.gltf'
      positionY={0}
      positionZ={10}
    />
  )
}

const StarWarsSpeedBikeB = () => {
  return (
    <Model
      modelPath='./models/starwars-speeder-bike/scene.gltf'
      positionY={0}
      positionZ={450}
    />
  )
}

// const LowPolyCity = () => {
//   return (
//     <Model
//       modelPath='./models/rat/scene.gltf'
//       positionY={0}
//       positionZ={50}
//     />
//   )
// }

export const scenes = [
  {
    canvas: <BD1 />,
    wallpaper: {
      background: 'radial-gradient(circle, rgba(164,18,18,1) 0%, rgba(200,35,35,1) 100%)'
    },
    meta: {
      title: 'BD-1',
      description: paragraphs(1),
      references: [
        {
          type: 'artist',
          title: 'Andrès Kuiper',
          link: 'https://sketchfab.com/3d-models/bd-1-61213fd805a54e758bb92ec869cb183d'
        },
      ]
    }
  },
  {
    canvas: <StarWarsSpeedBikeB />,
    wallpaper: {
      background: 'radial-gradient(circle, rgba(233,209,114,1) 0%, rgba(221,175,87,1) 100%)'
    },
    meta: {
      title: 'Star Wars Speeder Bike',
      description: paragraphs(1),
      references: [
        {
          type: 'artist',
          title: 'Idmental',
          link: 'https://sketchfab.com/3d-models/starwars-speeder-bike-free-download-1d0ea6fe43c1405b8d4b17722e166f6e'
        },
      ]
    }
  }
]
