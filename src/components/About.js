import React, { Component } from "react"
import { Heading, Image, Text } from "rebass"
import { Section } from "react-landing-page"
import styled from "styled-components"

const CompanyScroll = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`

const Company = styled.a`
  display: block;
  margin: 0 1rem;
  height: auto;
  width: 200px;

  img {
    height: 150px;
    width: 150px;
    object-fit: contain;
  }
`

const StyledSection = styled(Section)`
  overflow: hidden;
  padding: 3rem 0 5rem;
  text-align: center;

  p {
    max-width: 600px;
    font-size: 18px;
  }
`

class About extends Component {
  animationID = null
  startTs = null
  width = null
  state = {
    transform: `translateX(0px)`,
  }

  componentDidMount() {
    this.start()
    const el = document.querySelector("#companyScroll")
    this.width = el.scrollWidth
  }

  start = () => {
    this.animationID = window.requestAnimationFrame(this.step)
  }

  pause = () => {
    window.cancelAnimationFrame(this.animationID)
    this.startTs = null
  }

  step = timestamp => {
    if (!this.startTs) this.startTs = timestamp

    const progress = timestamp - this.startTs
    let dx = (progress / 30) % (this.width / 2)

    this.setState({ transform: `translateX(${dx}px)` })
    this.animationID = window.requestAnimationFrame(this.step)
  }

  render() {
    const data = [].concat(this.props.companies, this.props.companies)
    return (
      <StyledSection bg="#F8F1E5" id="about">
        <Heading fontSize={[5, 6, 6]}>About</Heading>
        <p>
          We aim to bridge the gap between engineers and business people through
          education, networking, and community building. Learn about and prepare
          for your future career, meet like-minded engineers and
          businesspersons, and make the most of your time at BYU by being a part
          of the EBC.
        </p>
        <Heading textAlign="center" marginTop={40} fontSize={[3, 4, 5]}>
          Club members have worked at:
        </Heading>
        <CompanyScroll
          id="companyScroll"
          style={{ transform: this.state.transform, marginTop: "30px" }}
        >
          {data.map((company, i) => (
            <Company
              href={company.node.url}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={company.node.photo}
                alt={`${company.node.name} logo`}
              />
            </Company>
          ))}
        </CompanyScroll>
      </StyledSection>
    )
  }
}

export default About
