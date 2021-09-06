import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../scenes/section'
import { scenes } from '../scenes'
import { noop} from '../utils'

export const Home = ({ className }) => {
  return (
    <div className={className}>
      <Header />
      <main>
        {scenes ? (
          <ul className='scenes-list'>
            {scenes.map((scene, index) => {
              return (
              <li key={index}>
                <Section scene={scene} index={index +1} />
              </li>
              )
            })}
          </ul>
        ) : noop()}
      </main>
      <Footer />
    </div>
  )
}

export default styled(Home)`
scroll-snap-type: y mandatory;
overflow-y: scroll;
height: 100vh;

.scenes-list {
  margin: 0;

  li {
    scroll-snap-align: start;
  }
}
`
