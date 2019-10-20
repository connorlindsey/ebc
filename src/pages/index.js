import React from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Theme from "../styles/Theme"

import Nav from "../components/Nav"
import HeroSection from "../components/Hero"
import About from "../components/About"
import Leadership from "../components/Leadership"
import Education from "../components/Education"
import PostsSection from "../components/PostsSection"
import Calendar from "../components/Calendar"
import Footer from "../components/Footer"

const Container = styled.div`
  background-color: ${props => props.theme.grey["100"]};

  a {
    color: inherit;
    text-decoration: none;
  }
`

const IndexPage = ({data}) => {
  const leadership = data.allLeadershipJson.edges

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Nav />
        <HeroSection />
        <About />
        <Leadership leadership={leadership} />
        <Education />
        <PostsSection />
        <Calendar />
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export const query = graphql`
  query LeadershipQuery {
    allLeadershipJson {
      edges {
        node {
          id
          name
          photo
          position
          linkedin
        }
      }
    }
  }
`

export default IndexPage
