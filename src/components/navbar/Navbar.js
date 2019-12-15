import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import { scroller } from "react-scroll"

import Brand from "./Brand"
import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"
import { CallToAction } from "../../styles/CTA"

const Navbar = ({ isNavbarOpen, setNavbarOpen }) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  })

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  })

  const ScrollToSection = section => {
    scroller.scrollTo(section, {
      duration: 1250,
      delay: 100,
      smooth: true,
    })
  }

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <a onClick={() => ScrollToSection("about")}>About</a>
            <a onClick={() => ScrollToSection("leadership")}>Leadership</a>
            <a onClick={() => ScrollToSection("learn")}>Learn</a>
            <a onClick={() => ScrollToSection("news")}>News</a>
            <a onClick={() => ScrollToSection("events")}>Events</a>
            <CallToAction
              href="https://clubs.byu.edu/clubs#/embc"
              target="_blank"
            >
              Join
            </CallToAction>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              isNavbarOpen={isNavbarOpen}
              setNavbarOpen={setNavbarOpen}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu isNavbarOpen={isNavbarOpen} setNavbarOpen={setNavbarOpen} />
    </>
  )
}

Navbar.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  setNavbarOpen: PropTypes.func.isRequired,
}

export default Navbar

const NavBar = styled(animated.nav)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.grey["800"]};
  color: #fff;
  z-index: 1;
  font-size: 1.4rem;
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: flex;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 1040px) {
      display: none;
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 1041px) {
    display: none;
  }
`
