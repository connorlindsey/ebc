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
  background-attachment: fixed;
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

const HeroSection = ({ setNavbarOpen }) => {
  const scrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: "smooth",
    })
    setNavbarOpen(false)
  }
  return (
    <StyledHero>
      <Heading fontSize={[5, 6, 7, 8]}>Engineers in Business</Heading>
      <Text fontSize={[2, 3, 4, 5]}>
        We're here to connect the dots between engineering and business.
      </Text>
      <CallToAction
        style={{ marginTop: 20 }}
        href="https://clubs.byu.edu/clubs#/embc"
        target="_blank"
      >
        Join
      </CallToAction>
      <StyledIndicator color="white" onClick={scrollDown} />
    </StyledHero>
  )
}

export default HeroSection
