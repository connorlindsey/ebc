import React, { useState } from "react"
import { graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Theme from "../styles/Theme"
import { Element } from "react-scroll"

import Navbar from "../components/navbar"
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

const IndexPage = ({ data }) => {
  const leadership = data.allLeadershipJson.edges

  const [isNavbarOpen, setNavbarOpen] = useState(false)

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Navbar isNavbarOpen={isNavbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSection setNavbarOpen={setNavbarOpen} />
        <Element name="about">
          <About />
        </Element>
        <Element name="leadership">
          <Leadership leadership={leadership} />
        </Element>
        <Element name="learn">
          <Education />
        </Element>
        <Element name="news">
          <PostsSection />
        </Element>
        <Element name="events">
          <Calendar />
        </Element>
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