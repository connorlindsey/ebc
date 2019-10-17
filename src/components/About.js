import React from "react";
import { Heading, Image } from "rebass";
import { Tiles } from "@rebass/layout";
import { Section } from "react-landing-page";

const About = () => (
  <Section heading="About" subhead="What we do" bg="#F8F1E5">
    This is the about section of the landing page.
    <Heading textAlign="center" marginTop={20}>
      Where we work
    </Heading>
    <Tiles width={[96, null, 128]} flexAlign="center" marginTop={20}>
      <Image src="https://theretailconnection.net/wp-content/uploads/ClientLogos/Goldman-Sachs-4c.png" />
      <Image src="https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg" />
      <Image src="http://www.migrateproduction.com/wp-content/uploads/2011/10/Apple-Logo-300x300.jpg" />
    </Tiles>
  </Section>
);

export default About;
