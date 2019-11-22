import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import { CallToAction } from "../../styles/CTA"

const CollapseMenu = ({ isNavbarOpen, setNavbarOpen }) => {
  const { open } = useSpring({ open: isNavbarOpen ? 0 : 1 })

  if (isNavbarOpen === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <a href="#about" onClick={() => setNavbarOpen(!isNavbarOpen)}>
              About
            </a>
          </li>
          <li>
            <a href="#leadership" onClick={() => setNavbarOpen(!isNavbarOpen)}>
              Leadership
            </a>
          </li>
          <li>
            <a href="#learn" onClick={() => setNavbarOpen(!isNavbarOpen)}>
              Learn
            </a>
          </li>
          <li>
            <a href="#news" onClick={() => setNavbarOpen(!isNavbarOpen)}>
              News
            </a>
          </li>
          <li>
            <a href="#events" onClick={() => setNavbarOpen(!isNavbarOpen)}>
              Events
            </a>
          </li>
          <li>
            <CallToAction
              style={{ width: 150 }}
              onClick={() => setNavbarOpen(!isNavbarOpen)}
              href="https://clubs.byu.edu/clubs#/embc"
              target="_blank"
            >
              Join
            </CallToAction>
          </li>
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

CollapseMenu.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  setNavbarOpen: PropTypes.func.isRequired,
}

export default CollapseMenu

const CollapseWrapper = styled(animated.div)`
  background-color: ${props => props.theme.grey["800"]};
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;

  @media (min-width: 1040px) {
    display: none;
  }
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  color: #fff;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`
