import React from "react"
import { Heading, Text } from "rebass"
import { ScrollDownIndicator } from "react-landing-page"
import styled from "styled-components"

import { CallToAction } from "../styles/CTA"

const StyledHero = styled.div`
  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
    url("https://images.unsplash.com/photo-1553286216-67812f595805?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60");
  object-fit: cover;
  min-height: 100vh;
  background-color: #000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`

const StyledIndicator = styled(ScrollDownIndicator)`
  cursor: pointer;
`

const HeroSection = () => {
  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    })
  } 
  return (
    <StyledHero>
      <Heading>Engineers in Business</Heading>
      <Text>
        We're here to connect the dots between engineering and business.
      </Text>
      <CallToAction href="https://clubs.byu.edu/clubs#/embc" mt={3}>
        Join
      </CallToAction>
      <StyledIndicator color="white" onClick={scrollDown} />
    </StyledHero>
  )
}

export default HeroSection
