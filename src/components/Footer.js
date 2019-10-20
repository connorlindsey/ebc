import React from "react";
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.grey["800"]};
  color: #FFF;
  padding: 1.5rem 1rem 1rem;
  text-align: center;
`

const Footer = () => (
  <StyledFooter>
    © EBC 2019
  </StyledFooter>
);

export default Footer;
