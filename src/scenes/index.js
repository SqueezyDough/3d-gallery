
import TheBox from './theBox'
import { paragraphs } from '../utils'

export const scenes = [
  {
    canvas: <TheBox />,
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
          title: 'PMNDRS',
          link: 'https://github.com/pmndrs/use-cannon'
        }
      ]
    }
  }
]
