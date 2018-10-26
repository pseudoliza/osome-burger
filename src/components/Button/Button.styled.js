import styled, { css } from 'styled-components'
import media from 'src/styles/media.styled'

export const Css = css`
  background-color: ${props => props.theme.colors.active};
  border: solid 1px ${props => props.theme.colors.active};
  color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  transition: transform 0.3s;
  transform-origin: center;
  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.theme.colors.hoverActive};
  }
`

export const ButtonCss = css`
  ${Css}
  border-radius: 28px;
  padding: 13px 20px;
  font-size: ${props => props.theme.fontSize.mediumRare};
  font-weight: ${props => props.theme.fontWeight.bold};
  letter-spacing: ${props => props.theme.letterSpacing};
  text-decoration: none;
  width: auto;
  text-align: center;
  ${media.desktop`
    border-radius: 46px;
    width: fit-content;
    border: solid 1px ${props => props.theme.colors.active};
    padding: 25px 40px;
    font-size: ${props => props.theme.fontSize.extraLarge};
    line-height: ${props => props.theme.lineHeight.extraLarge};
    font-weight: ${props => props.theme.fontWeight.semiBold};
  `}
`

export const StyledButton = styled.button`
  ${ButtonCss}
`

export const ButtonSmallCss = css`
  ${Css}
  border-radius: 33px;
  padding: 15px 25px;
  font-size: ${props => props.theme.fontSize.regular};
`

export const StyledButtonSmall = styled.button`
  ${ButtonSmallCss}
`

export const ButtonOutlineCss = css`
  ${Css}
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.active};
  &:hover {
    background-color: ${props => props.theme.colors.hoverActive};
    border: solid 1px ${props => props.theme.colors.hoverActive};
    color: ${props => props.theme.colors.white};
  }
`

export const StyledButtonOutline = styled.button`
  ${ButtonCss}
  ${ButtonOutlineCss}
`

export const StyledButtonSmallOutline = styled.button`
  ${ButtonSmallCss}
  ${ButtonOutlineCss}
`


export const StyledButtonLink = styled.a`
   ${ButtonSmallCss}
   ${ButtonOutlineCss}
   text-decoration: none;
`
