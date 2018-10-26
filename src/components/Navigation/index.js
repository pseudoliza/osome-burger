import React from 'react'
import Dropdown from 'src/components/Dropdown'
import MobileNavigation from 'src/components/MobileNavigation'
import { StyledButtonLink } from 'src/components/Button/Button.styled'
import { StyledNavDesktop } from './styled'

export default (props) => (
  <nav>
    <StyledNavDesktop>
      <li>
        <Dropdown />
      </li>
      <li>
        <StyledButtonLink
          href={props.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Get Started
        </StyledButtonLink>
      </li>
    </StyledNavDesktop>
    <MobileNavigation />
  </nav>
)
