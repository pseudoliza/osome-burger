import React from 'react'
import { Hamburger, Line } from './styled'

export default class StyledMobileButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
  }

  state = {
    open: false,
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
      <Hamburger open={this.props.open} onClick={this.props.onClick}>
        <Line open={this.props.open} />
        <Line open={this.props.open} />
      </Hamburger>
    )
  }
}
