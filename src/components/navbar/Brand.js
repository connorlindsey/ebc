import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HomeLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
  align-self: center;
`

const Brand = () => {
  return <HomeLink to="/">Engineers in Business</HomeLink>
}

export default Brand
