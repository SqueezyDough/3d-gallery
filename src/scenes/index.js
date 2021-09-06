
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

const StarWarsSpeedBike = () => {
  return (
    <Model
      modelPath='./models/starwars-speeder-bike/scene.gltf'
      positionY={0}
      positionZ={450}
    />
  )
}

const Coruscant = () => {
  return (
    <Model
      modelPath='./models/coruscant/scene.gltf'
      positionY={0}
      positionZ={500}
    />
  )
}

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
    canvas: <StarWarsSpeedBike />,
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
  },
  {
    canvas: <Coruscant />,
    wallpaper: {
      background: 'radial-gradient(circle, rgba(223,96,19,1) 0%, rgba(126,60,18,1) 100%)'
    },
    meta: {
      title: 'Coruscant',
      description: paragraphs(1),
      references: [
        {
          type: 'artist',
          title: 'Mateusz Woliński',
          link: 'https://sketchfab.com/3d-models/coruscant-802db255f49e4e1e8d398213ecc371ae'
        },
      ]
    }
  }
]
