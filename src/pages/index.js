import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Theme from "../styles/Theme"

import Nav from "../components/Nav"
import HeroSection from "../components/Hero"
import About from "../components/About"
import Leadership from "../components/Leadership"
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

class IndexPage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Container>
          <Nav />
          <HeroSection />
          <About />
          <Leadership />
          <PostsSection />
          <Calendar />
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}

export default IndexPage
