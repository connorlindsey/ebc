import React from "react"
import { Heading, Image } from "rebass"
import { Tiles } from "@rebass/layout"
import { Section } from "react-landing-page"

const About = () => (
  <Section heading="About" bg="#F8F1E5" id="about">
    We aim to bridge the gap between engineers and business people through
    education, networking, and community building.
    <Heading textAlign="center" marginTop={40}>
      Club members have worked at:
    </Heading>
    <Tiles width={[96, null, 128]} flexAlign="center" marginTop={20}>
      <Image src="https://theretailconnection.net/wp-content/uploads/ClientLogos/Goldman-Sachs-4c.png" />
      <Image src="https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg" />
      <Image src="http://www.migrateproduction.com/wp-content/uploads/2011/10/Apple-Logo-300x300.jpg" />
    </Tiles>
  </Section>
)

export default About
