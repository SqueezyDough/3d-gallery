import Header from '../components/header'
import Footer from '../components/footer'
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
      <Footer />
    </>
  )
}
