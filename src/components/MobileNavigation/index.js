import React from 'react'
import Dropdown from 'src/components/Dropdown'
import StyledMobileButton from 'src/components/StyledMobileButton'
import { StyledNavMobile, StyledLink } from './styled'

export default class MobileNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  state = {
    open: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open !== prevState.open) {
      document.getElementById('__next').style.overflow = this.state.open ? 'hidden' : 'unset'
    }
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open,
    })
  }

  handleClick() {
    this.toggleOpen()
  }

  render() {
    return (
      <nav>
        <StyledMobileButton
          open={this.state.open}
          onClick={this.handleClick}
        />
        <StyledNavMobile open={this.state.open} >
          <Dropdown
            open={this.state.open}
            onClick={this.handleClick}
          />
          <StyledLink
            href={this.props.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Get Started
          </StyledLink>
        </StyledNavMobile>
      </nav>
    )
  }
}
