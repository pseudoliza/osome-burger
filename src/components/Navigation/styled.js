import styled from 'styled-components'
import media from 'src/styles/media.styled'

export const StyledNavDesktop = styled.ul`
  display: none;
  list-style-type: none;
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
  -webkit-padding-start: 0px;
  ${media.desktop`
    display: flex;
    align-items: center;
  `}
`
