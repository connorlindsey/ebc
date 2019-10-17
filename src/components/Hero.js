import React from "react"
import { Heading, Text } from "rebass"
import { Hero, CallToAction, ScrollDownIndicator } from "react-landing-page"

const HeroSection = () => (
  <Hero
    color="black"
    backgroundImage="EB.jpg"
  >
    <Heading>Engineers in Business</Heading>
    <Text>
      We're here to connect the dots between engineering and business.
    </Text>
    <CallToAction href="https://clubs.byu.edu/clubs#/embc" mt={3}>
      Join
    </CallToAction>
    <ScrollDownIndicator color="white" />
  </Hero>
)

export default HeroSection
