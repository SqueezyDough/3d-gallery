import React from 'react'
import styled, { css } from 'styled-components'
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
      <div className='nav__menu'>
        <Image
          src='/lvb-icon.png'
          alt='socials'
          width={64}
          height={64}
          priority='true'
          className='nav__menu__icon'
        />
        <div id='circle-orbit-container'>
          <div id='inner-orbit'>
            <div className='inner-orbit-circles'>
              <a className='nav__menu__link' href='https://github.com/SqueezyDough' target='_blank' rel='noreferrer'>
                <span className='nav__external'>GitHub</span>
                <GithubIcon />
              </a>
            </div>
          </div>

          <div id='middle-orbit'>
            <div className='middle-orbit-circles'>
              <a className='nav__menu__link' href='https://www.linkedin.com/in/leroy-van-biljouw-0691b01a9/' target='_blank' rel='noreferrer'>
                <span className='nav__external'>LinkedIn</span>
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div id='outer-orbit'>
            <div className='outer-orbit-circles'></div>
          </div>
        </div>
      </div>
     </nav>
    </header>
  )
}

export default styled(Header)`
display: flex;
justify-content: space-between;
width: 100%;
height: 124px;
overflow: hidden;

.page-header {
  display: flex;
  padding: ${({ theme }) => theme.spacing.sm};

  &__section {
    border: 1px solid white;
    &__title-p1 {
      padding: ${({ theme }) => theme.spacing.xs};
      font-family: ${({ theme }) => theme.fonts.headerBoldItalic};
    }

    &__title-p2 {
      padding: ${({ theme }) => theme.spacing.xs};
      font-family: ${({ theme }) => theme.fonts.body};
      border: 2px solid ${({ theme }) => theme.colors.black};
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.black};
    }
  }
}

.nav {
  align-self: center;
  transition: .3s;

  &:hover, &:focus {
    transform: scale(1.1);

    #circle-orbit-container  {
      opacity: 1;
    }
  }

  &__menu {
    position: relative;
    margin-right: ${({ theme }) => theme.spacing.sm};
    max-height: 124px;

    &__icon {
      margin: 1rem 2rem;
      border-radius: 50%;
    }

    &__link {
      display: inline-block;
      position: relative;
      z-index: 998;
      height: 32px;
      background-color: white;
      border-radius: 50%;
      transition: .3s;
    }
  }

  #circle-orbit-container {
    position: absolute;
    margin-top: -3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: .3s;
  }

  #inner-orbit {
    position: relative;
    z-index: 2;
    width: 88px;
    height:  88px;
    border: 1px #000 dashed;
    border-radius: 50%;
    -webkit-animation: orbit-1 10s linear infinite;
    animation: orbit-1 10s linear infinite;
  }

  #middle-orbit {
    position: absolute;
    z-index: 1;
    width: 124px;
    height: 124px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px #000 dashed;
    border-radius: 100%;
    -webkit-animation: orbit-2 15s linear infinite;
    animation: orbit-2 15s linear reverse infinite;
  }

  #outer-orbit {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 164px;
    height: 164px;
    border: 1px grey solid;
    border-radius: 100%;
    -webkit-animation: orbit-2 20s linear infinite;
    animation: orbit-2 20s linear infinite;
  }

  @keyframes orbit-1 {
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes orbit-2 {
    100% {
      -webkit-transform: translate(-50%, -50%) rotate(360deg);
      -moz-transform: translate(-50%, -50%) rotate(360deg);
      -ms-transform: translate(-50%, -50%) rotate(360deg);
      -o-transform: translate(-50%, -50%) rotate(360deg);
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
}

.nav__external {
  display: none;
}
`