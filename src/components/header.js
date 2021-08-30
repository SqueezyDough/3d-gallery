import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import LinkedInIcon from '../assets/linkedInIcon'
import GithubIcon from '../assets/githubIcon'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h1 className='page-header'>
        <section className='page-header__section'>
          <span className='page-header__section__title-p1'>Three</span>
          <span className='page-header__section__title-p2'>JS</span>
        </section>
      </h1>

      <nav className='nav'>
        <a className='nav__link' href='https://github.com/SqueezyDough' target='_blank' rel='noreferrer'>
          <span className='nav__external'>GitHub</span>
          <GithubIcon />
        </a>

        <a className='nav__link' href='https://www.linkedin.com/in/leroy-van-biljouw-0691b01a9/' target='_blank' rel='noreferrer'>
          <span className='nav__external'>LinkedIn</span>
          <LinkedInIcon />
        </a>
      </nav>
    </header>
  )
}

export default styled(Header)`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 auto;
max-width: ${({ theme }) => theme.screens.xl};
position: relative;
z-index: 1;

.page-header {
  display: flex;
  padding: ${({ theme }) => theme.spacings.sm} 0;

  &__section {
    &__title-p1 {
      margin-right: ${({ theme }) => theme.spacings.sm};
      font-family: ${({ theme }) => theme.fonts.headerBoldItalic};
    }

    &__title-p2 {
      padding: ${({ theme }) => theme.spacings.xs};
      font-family: ${({ theme }) => theme.fonts.body};
      border: 2px solid ${({ theme }) => theme.colors.black};
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
}

.nav {
  &__link {
    display: inline-block;
    margin-left: ${({ theme }) => theme.spacings.sm};
    height: 32px;
    border-radius: 50%;
  }
}

.nav__external {
  display: none;
}
`