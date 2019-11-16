import React from "react"
import { Heading, Text } from "rebass"
import { ScrollDownIndicator } from "react-landing-page"
import styled from "styled-components"

import { CallToAction } from "../styles/CTA"

const StyledHero = styled.div`
  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
    url("https://brightspotcdn.byu.edu/dims4/default/268930b/2147483647/strip/true/crop/1200x799+0+0/resize/840x559!/quality/90/?url=https%3A%2F%2Fbrightspotcdn.byu.edu%2Ffe%2Fa7%2Fbbedbcd137b1c7097307c7a6c0e8%2F1901-32-0010-2.jpg");
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
      <Text fontSize={[2, 3, 4, 5]} textAlign={"center"}>
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
