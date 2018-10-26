import styled from 'styled-components'
import SVGInline from 'react-svg-inline'
import media from 'src/styles/media.styled'

export const StyledDropdownButton = styled.button`
  font-size: ${props => props.theme.fontSize.mobileLarge};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 100px -25px 30px 0;
  color: ${props => props.theme.colors.greyLight};
  height: 70px;
  ${media.desktop`
    margin: 0;
    font-weight: normal;
    font-size: ${props => props.theme.fontSize.regular};
    color: ${props => props.theme.colors.active};
  `}
`
export const StyledArrowImg = styled(SVGInline)`
  svg {
    vertical-align: middle;
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    fill: ${props => props.theme.colors.greyLight};
  }
  ${props => props.open && `
    svg {
      transform: rotate(90deg);
      fill: ${props.theme.colors.disabled};
    }
  `}

  ${media.desktop`
    svg {
      width: 10px;
      height: 10px;
      fill: ${props => props.theme.colors.active};
    }
    ${props => props.open && `
      svg {
        transform: rotate(-90deg);
        fill: ${props.theme.colors.active};
      }
    `}
  `}
`

export const StyledDropdownContent = styled.div`
  display: none;

  ${props => props.open && `
    display: block;
  `}
  ${media.desktop`
    width: 430px;
    left: -165px;
    top: 70px;
    z-index: 1;
    background: ${props => props.theme.colors.white};
    position: absolute;
    padding: 20px 0;
    border-radius: 5px;
    box-shadow: 0 0 6px 0 rgba(199, 199, 199, 0.5);
    ${props => props.open && `
      display: none;
    `}
  `}
`

export const StyledDropdown = styled.div`
  width: 100%;
  text-align: center;

  ${media.desktop`
    width: auto;
    text-align: left;
    position: relative;
    padding-right: 40px;
    &:hover {
      ${StyledDropdownContent} {
        display: block;
      }
      ${StyledArrowImg} {
        svg {
          transform: rotate(90deg);
        }
      }
    }
  `}
`

export const StyledSection = styled.div`
  ${media.desktop`
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  `}
`

export const SectionTitle = styled.div`
  font-size: ${props => props.theme.fontSize.mediumRare};
  color: ${props => props.theme.colors.disabled};
  font-weight: ${props => props.theme.fontWeight.bold};
  ${media.desktop`
    opacity: 0.5;
    color: ${props => props.theme.colors.fontDark};
    font-size: ${props => props.theme.fontSize.regular};
    line-height: 24px;
    letter-spacing: ${props => props.theme.letterSpacing};
    padding: 7px 35px 10px;
  `}
`

export const SectionContent = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    font-size: ${props => props.theme.fontSize.mediumRare};
    font-weight: ${props => props.theme.fontWeight.bold};
    margin-bottom: 25px;
    &:last-of-type {
      margin-bottom: 50px;
    }
  }
  ${media.desktop`
    li {
      margin: 0;
      font-size: unset;
      font-weight: normal;
      padding: 10px;
      border: solid 1px transparent;
      &:hover {
        border-color: ${props => props.theme.colors.active};
      }
      &:last-of-type {
        margin: 0;
      }
    }
    a {
      width: 100%;
    }
  `}
`
