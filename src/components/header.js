import React from 'react'
import styled from 'styled-components'
import Social from './social'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h1 className='page-header'>
        <section className='page-header__section'>
          <span className='page-header__section__title-p1'>Three</span>
          <span className='page-header__section__title-p2'>JS</span>
        </section>
      </h1>
      <Social />
    </header>
  )
}

export default styled(Header)`
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
transform: translateX(-50%);
left: 50%;
width: 100%;
max-width: ${({ theme }) => theme.screens.xl};

.page-header {
  display: flex;
  padding: ${({ theme }) => theme.spacings.sm} 0;

  &__section {
    &__title-p1, &__title-p2 {
      mix-blend-mode: difference;
      color: ${({ theme }) => theme.colors.white};
    }

    &__title-p1 {
      margin-right: ${({ theme }) => theme.spacings.sm};
      font-family: ${({ theme }) => theme.fonts.headerBoldItalic};
    }

    &__title-p2 {
      padding: ${({ theme }) => theme.spacings.xs};
      font-family: ${({ theme }) => theme.fonts.body};
      border: 2px solid ${({ theme }) => theme.colors.white};
      border-radius: 5px;
    }
  }
}
`