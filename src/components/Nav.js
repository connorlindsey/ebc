import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { CallToAction } from "../styles/CTA"

const Nav = styled.nav`
  background-color: ${props => props.theme.grey["800"]};
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 0.5rem 1rem;
`

const Spacer = styled.div`
  margin: 0 auto;
`

const NavLink = styled.a`
  margin: 0 0.5rem;
  &:hover {
    color: ${props => props.theme.primary["300"]};
  }
`

const HomeLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
`

const NavBar = () => (
  <Nav>
    <HomeLink to="/">Engineers in Business</HomeLink>
    <Spacer />
    <NavLink href="#about">About</NavLink>
    <NavLink href="#leadership">Leadership</NavLink>
    <NavLink href="#learn">Learn</NavLink>
    <NavLink href="#news">News</NavLink>
    <NavLink href="#events">Events</NavLink>
    <CallToAction href="https://clubs.byu.edu/clubs#/embc">Join</CallToAction>
  </Nav>
)

export default NavBar
