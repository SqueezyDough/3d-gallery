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
  justify-content: space-between;
  width: calc(100% - 2rem);
  max-width: ${({ theme }) => theme.screens.xl};
  margin: 8rem auto;
  border-top: 1px solid black;
  padding: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.screens.xl}) {
    padding: 1rem 0;
  }

  .nav__menu {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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
