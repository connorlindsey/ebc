import styled from "styled-components"

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

export { CallToAction }