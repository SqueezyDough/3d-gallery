import Header from '../components/header'
import Footer from '../components/footer'
import SceneWrapper from '../scenes/sceneWrapper'
import { scenes } from '../scenes'
import { noop} from '../utils'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {scenes ? (
          <ul>
            {scenes.map((scene, index) => {
              return <li key={index}>
                <SceneWrapper scene={scene} index={index +1} />
              </li>
            })}
          </ul>
        ) : noop()}
      </main>
      <Footer />
    </>
  )
}
