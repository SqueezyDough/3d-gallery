import Header from '../components/header'
import SceneWrapper from '../scenes/sceneWrapper'
import TheBox from '../scenes/theBox'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SceneWrapper index='1' title='The Box'>
          <TheBox />
        </SceneWrapper>
      </main>

      <footer>
        {/* TODO: Build footer component */}
      </footer>
    </>
  )
}
