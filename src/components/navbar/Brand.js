import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const HomeLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  align-self: center;
  display: flex;
  align-items: center;

  img {
    margin-right: .5rem;
  }
`

const Brand = () => {
  const data = useStaticQuery(
    graphql`
      query LogoQuery {
        file(relativePath: { regex: "/ebc_logo/" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <HomeLink to="/">
      <Img fixed={data.file.childImageSharp.fixed} />
      <span>Engineers in Business</span>
    </HomeLink>
  )
}

export default Brand
