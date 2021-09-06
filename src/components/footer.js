import styled from 'styled-components'
import Social from './social'

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={className}>
      <p className='description'>
        Three.js Sandbox
      </p>
      <Social />
      <p className='copyright'>© {currentYear} Leroy van Biljouw</p>
    </footer>
  )
}

export default styled(Footer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.screens.xl};
  height: 10rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.sm} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  color: white;

  @media only screen and (min-width: ${({ theme }) => theme.screens.sm}) {
    height: auto;
    flex-direction: row;
    margin: 8rem auto 0;
  }

  .nav__menu {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 5rem;
    list-style-type: none;

    > {
      mix-blend-mode: difference;

    }
  }

  .nav__external {
    display: none;
  }

  .description, .copyright {
    margin: 0;
  }
`
