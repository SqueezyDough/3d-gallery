import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '../assets/icons/linkedInIcon'
import GithubIcon from '../assets/icons/githubIcon'

const Social = ({ className }) => {
  return (
    <nav className={ className }>
      <a className='nav__link' href='https://github.com/SqueezyDough' target='_blank' rel='noreferrer'>
        <span className='nav__external'>GitHub</span>
        <GithubIcon />
      </a>

      <a className='nav__link' href='https://www.linkedin.com/in/leroy-van-biljouw-0691b01a9/' target='_blank' rel='noreferrer'>
        <span className='nav__external'>LinkedIn</span>
        <LinkedInIcon />
      </a>
    </nav>
  )
}

export default styled(Social)`
background-color: ${({ theme }) => theme.colors.white};
border-radius: 5px;

.nav__link {
  display: inline-block;
  padding: ${({ theme }) => theme.spacings.xs};
  height: 32px;
  border-radius: 50%;

  span {
    display: none;
  }
}
`