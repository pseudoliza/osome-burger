import React from 'react'
import arrow from 'src/images/arrow.svg'
import { StyledLink } from 'src/styles/typography.styled'
import { StyledDropdown, StyledDropdownButton, StyledDropdownContent, StyledSection, SectionTitle, SectionContent, StyledArrowImg } from './styled'

export default class Dropdown extends React.Component {
  state = {
    open: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open && nextProps.open === false) {
      return { open: nextProps.open }
    }
    return null
  }

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  renderLink = item => (
    <li key={item.url}>
      <StyledLink
        onClick={this.toggleOpen}
        href={item.url}
      >
        {item.name}
      </StyledLink>
    </li>
  )

  render() {
    const incorporationLinks = [{
      url: '/singaporeans-and-prs',
      name: 'Singaporeans & PRs',
    }, {
      url: '/incorporation-for-foreigners-residing-in-singapore',
      name: 'Foreigners residing in Singapore',
    }, {
      url: '/incorporation-for-foreigners-outside-singapore',
      name: 'Foreigners outside Singapore',
    }]

    const solutionsForBusinessLinks = [{
      url: '/secretary',
      name: 'Secretary',
    }, {
      url: '/accounting-and-taxation',
      name: 'Accounting & Taxation',
    }, {
      url: '/end-of-year-filing',
      name: 'End of year filing',
    }, {
      url: '/dormant-company',
      name: 'Dormant Company',
    }, {
      url: '/sole-proprietorship-conversion-to-pte-ltd',
      name: 'Sole Proprietorship conversion, PTE LTD',
    }]

    return (
      <StyledDropdown>
        <StyledDropdownButton open={this.state.open} onClick={this.toggleOpen}>
          Pricing <StyledArrowImg svg={arrow} open={this.state.open} />
        </StyledDropdownButton>
        <StyledDropdownContent open={this.state.open}>
          <StyledSection>
            <SectionTitle>Incorporation</SectionTitle>
            <SectionContent>
              <ul>
                {incorporationLinks.map(this.renderLink)}
              </ul>
            </SectionContent>
          </StyledSection>
          <StyledSection>
            <SectionTitle>Solutions for business</SectionTitle>
            <SectionContent>
              <ul>
                {solutionsForBusinessLinks.map(this.renderLink)}
              </ul>
            </SectionContent>
          </StyledSection>
        </StyledDropdownContent>
      </StyledDropdown>
    )
  }
}
