import React from "react";
import { Flex, Link, Text, Box } from "rebass";
import { CallToAction } from "react-landing-page";

const NavBar = () => (
  <Flex px={2} color="white" bg="#2F3131" alignItems="center">
    <Text p={2} fontWeight="bold">
      Engineers in Business
    </Text>
    <Box mx="auto" />
    <Link
      variant="nav"
      href="#about"
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        px: 2,
        py: 1,
        color: "inherit"
      }}
    >
      About
    </Link>
    <Link
      variant="nav"
      href="#leadership"
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        px: 2,
        py: 1,
        color: "inherit"
      }}
    >
      Leadership
    </Link>
    <Link
      variant="nav"
      href="#blog"
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        px: 2,
        py: 1,
        color: "inherit"
      }}
    >
      Blog
    </Link>
    <Link
      variant="nav"
      href="#calendar"
      sx={{
        display: "inline-block",
        fontWeight: "bold",
        px: 2,
        py: 1,
        color: "inherit"
      }}
    >
      Calendar
    </Link>
    <CallToAction href="/join" mt={3}>
      Join
    </CallToAction>
  </Flex>
);

export default NavBar;
