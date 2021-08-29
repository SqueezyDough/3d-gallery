import styled from 'styled-components'
import LinkedInIcon from '../assets/linkedInIcon'
import GithubIcon from '../assets/githubIcon'

const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={className}>
      <p className='description'>
        Three.js Sandbox
      </p>
      <ul className='nav__menu'>
        <li>
          <a className='nav__menu__link' href='https://www.linkedin.com/in/leroy-van-biljouw-0691b01a9/' target='_blank' rel='noreferrer'>
            <span className='nav__external'>LinkedIn</span>
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a className='nav__menu__link' href='https://github.com/SqueezyDough' target='_blank' rel='noreferrer'>
            <span className='nav__external'>GitHub</span>
            <GithubIcon />
          </a>
        </li>
      </ul>
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
  margin: 4rem auto 0;
  padding: ${({ theme }) => theme.spacings.sm} 0;
  border-top: 1px solid black;

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
  }

  .nav__external {
    display: none;
  }

  .description, .copyright {
    margin: 0;
  }
`
