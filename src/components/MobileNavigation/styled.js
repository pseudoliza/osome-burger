import styled from 'styled-components'
import media from 'src/styles/media.styled'
import { NavLinkCss } from 'src/styles/typography.styled'

export const StyledNavMobile = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background: white;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.desktop`
    display: none;
  `}
  ${props => props.open && `
    display: flex;
  `}
`

export const StyledLink = styled.a`
  ${NavLinkCss}
  font-size: ${props => props.theme.fontSize.mobileLarge};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  margin-bottom: 20px;
  color: ${props => props.theme.colors.greyLight};
  &:last-child {
    margin-bottom: 100px;
  }
`
