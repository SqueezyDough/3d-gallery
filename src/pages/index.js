import SceneWrapper from '../scenes/sceneWrapper'
import TheBox from '../scenes/theBox'

export default function Home() {
  return (
    <>
      <header>
        {/* TODO: Build header component */}
      </header>
      <main>
        <SceneWrapper title='The Box'>
          <TheBox />
        </SceneWrapper>

      </main>

      <footer>
        {/* TODO: Build footer component */}
      </footer>
    </>
  )
}
