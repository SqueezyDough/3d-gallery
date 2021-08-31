import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../scenes/section'
import { scenes } from '../scenes'
import { noop} from '../utils'

export default function Home() {
  console.log(scenes)
  return (
    <>
      <Header />
      <main>
        {scenes ? (
          <ul>
            {scenes.map((scene, index) => {
              return <li key={index}>
                <Section scene={scene} index={index +1} />
              </li>
            })}
          </ul>
        ) : noop()}
      </main>
      <Footer />
    </>
  )
}
