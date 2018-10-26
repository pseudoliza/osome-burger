import styled, { css } from 'styled-components'
import media from 'src/styles/media.styled'
import Link from 'next/link'
import theme from './theme.styled'

export const NavLinkCss = css`
  text-decoration: none;
  color: ${theme.colors.active};
  ${media.desktop`
    font-size: ${theme.fontSize.regular};
    padding: 15px 25px;
  `}
`

export const StyledLink = styled.a`
  ${NavLinkCss}
`
