import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BurgerMenu = ({ isNavbarOpen, setNavbarOpen }) => {
  return (
    <Wrapper
      onClick={() => {
        setNavbarOpen(!isNavbarOpen)
      }}
    >
      <div className={isNavbarOpen ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  )
}

BurgerMenu.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  setNavbarOpen: PropTypes.func.isRequired,
}

export default BurgerMenu

const Wrapper = styled.div`
  position: relative;
  padding-top: 0.7rem;
  cursor: pointer;
  display: block;

  & span {
    background: ${props => props.theme.primary["100"]};
    display: block;
    position: relative;
    width: 2rem;
    height: 0.2rem;
    margin-bottom: 0.4rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }
`
