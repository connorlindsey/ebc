import React from "react";
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  background-color: ${props => props.theme.grey["900"]};
  color: #FFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
  padding: .5rem 1rem;
`

const Spacer = styled.div`
  margin: 0 auto;
`

const NavLink = styled.a`
  margin: 0 .5rem;
  &:hover {
    color: ${props => props.theme.primary["300"]};
  }
`

const CallToAction = styled.a`
  display: block;
  border: none;
  text-align: center;
  padding: 8px 25px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  background: ${props => props.theme.primary["500"]};
  margin: 0 .5rem;
  color: #FFF;
  transition: .2s all ease;

  &:hover {
    background: ${props => props.theme.primary["400"]};
  }
`

const HomeLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
`

const NavBar = () => (
  <Nav>
    <HomeLink to="/">
      Engineers in Business
    </HomeLink>
    <Spacer />
    <NavLink href="#about">About</NavLink>
    <NavLink href="#leadership">Leadership</NavLink>
    <NavLink href="#learn">Learn</NavLink>
    <NavLink href="#news">News</NavLink>
    <NavLink href="#events">Events</NavLink>
    <CallToAction href="https://clubs.byu.edu/clubs#/embc">
      Join
    </CallToAction>
  </Nav>
);

export default NavBar;
