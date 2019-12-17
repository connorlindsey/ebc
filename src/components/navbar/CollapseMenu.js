import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { scroller } from "react-scroll"

import { CallToAction } from "../../styles/CTA"

const CollapseMenu = ({ isNavbarOpen, setNavbarOpen }) => {
  const { open } = useSpring({ open: isNavbarOpen ? 0 : 1 })

  const ScrollToSection = section => {
    scroller.scrollTo(section, {
      duration: 1250,
      delay: 100,
      smooth: true,
    })
  }

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
            <a
              onClick={() => {
                setNavbarOpen(!isNavbarOpen)
                ScrollToSection("about")
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavbarOpen(!isNavbarOpen)
                ScrollToSection("leadership")
              }}
            >
              Leadership
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavbarOpen(!isNavbarOpen)
                ScrollToSection("learn")
              }}
            >
              Learn
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavbarOpen(!isNavbarOpen)
                ScrollToSection("news")
              }}
            >
              News
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setNavbarOpen(!isNavbarOpen)
                ScrollToSection("events")
              }}
            >
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
