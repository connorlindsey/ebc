import React from "react"
import { Heading, Image, Text } from "rebass"
import { Tiles } from "@rebass/layout"
import { Section } from "react-landing-page"

const About = () => (
  <Section bg="#F8F1E5" id="about">
    <Heading fontSize={[5, 6, 7]} marginTop={-75}>
      About
    </Heading>
    <Text fontSize={[2, 3, 4]}>
      We aim to bridge the gap between engineers and business people through
      education, networking, and community building.
    </Text>
    <Heading textAlign="center" marginTop={40} fontSize={[3, 4, 5]}>
      Club members have worked at:
    </Heading>
    <Tiles width={[96, null, 128]} flexAlign="center" marginTop={20}>
      <a
        href="https://www.goldmansachs.com/careers/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="https://theretailconnection.net/wp-content/uploads/ClientLogos/Goldman-Sachs-4c.png" />
      </a>
      <a
        href="https://www.tesla.com/careers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg" />
      </a>
      <a
        href="https://www.apple.com/jobs/us/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="http://www.migrateproduction.com/wp-content/uploads/2011/10/Apple-Logo-300x300.jpg" />
      </a>
    </Tiles>
  </Section>
)

export default About
