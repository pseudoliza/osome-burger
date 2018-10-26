import styled from 'styled-components'
import media from 'src/styles/media.styled'

export const Line = styled.span`
  width: 40px;
  height: 4px;
  background-color: ${props => props.theme.colors.active};
  display: block;
  padding: 0;
  transition: all 0.3s ease-in-out;
  &:nth-child(1){
    margin-bottom: 16px;
  }
  ${props => props.open && `
    &:nth-child(1){
      transform: translateY(10px) rotate(45deg);
    }
    &:nth-child(2){
      transform: translateY(-10px) rotate(-45deg);
    }
  `}

`

export const Hamburger = styled.button`
  display: block;
  z-index: 3;
  border: none;
  position: relative;
  width: 40px;
  height: 28px;
  cursor: pointer;
  background: transparent;
  padding: 0;

  ${media.desktop`
    display: none;
  `}
`
