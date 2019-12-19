import styled from "styled-components"

const CallToAction = styled.button`
  display: block;
  border: none;
  text-align: center;
  padding: 6px 20px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: .5px;
  background: ${props => props.theme.primary["500"]};
  margin: 0 .5rem;
  color: #FFF;
  transition: .2s all ease;

  &:hover {
    background: ${props => props.theme.primary["400"]};
  }
`

export { CallToAction }