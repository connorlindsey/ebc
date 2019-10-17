import React from "react";
import { Link } from "rebass";
import { Section } from "react-landing-page";

const Footer = () => (
  <Section bg="#2F3131" color="white">
    <Link
      children="Link 1"
      href="#"
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        px: 2,
        py: 1,
        color: "inherit"
      }}
    />
    <Link
      children="Link 2"
      href="#"
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        px: 2,
        py: 1,
        color: "inherit"
      }}
    />
    © EBC, 2019
  </Section>
);

export default Footer;
