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

// import React from "react"
// import styled from "styled-components"

// const Section = styled.section`
//   background-color: ${props => props.theme.grey["800"]};
//   color: #fff;
//   padding: 3rem 2rem;
//   overflow: hidden;
//   text-align: center;
// `

// const LeadershipScrolling = styled.div`
//   display: flex;
//   transition: 0.1s all ease;
//   width: 95%;
//   margin: 1rem auto;
//   max-width: 800px;
// `

// const LeadershipMember = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   margin: 0 1rem;
//   width: 180px;
// `

// const Image = styled.img`
//   height: 100px;
//   width: 100px;
//   object-fit: cover;
//   border-radius: 50%;
// `

// const Name = styled.div`
//   font-size: 18px;
// `

// const Title = styled.div`
//   color: ${props => props.theme.grey["400"]};
//   font-size: 16px;
// `

// class Leadership extends React.Component {
//   animationID = null
//   startTs = null
//   width = null
//   state = {}

//   componentDidMount() {
//     this.start()
//     const el = document.querySelector("#scrollingContainer")
//     this.width = el.scrollWidth
//   }

//   start = () => {
//     this.animationID = window.requestAnimationFrame(this.step)
//   }

//   pause = () => {
//     window.cancelAnimationFrame(this.animationID)
//     this.startTs = null
//   }

//   step = timestamp => {
//     if (!this.startTs) this.startTs = timestamp

//     const progress = timestamp - this.startTs
//     let dx = (-1 * (progress / 40)) % (this.width / 2)

//     this.setState({ transform: `translateX(${dx}px)` })
//     this.animationID = window.requestAnimationFrame(this.step)
//   }

//   render() {
//     const items = [].concat(this.props.leadership, this.props.leadership)

//     return (
//       <Section id="leadership">
//         <h2>Our Team</h2>
//         <LeadershipScrolling
//           style={{ transform: this.state.transform }}
//           id="scrollingContainer"
//         >
//           {items.map((item, i) => (
//             <a href={item.node.linkedin} target="_blank" rel="noopener noreferrer" key={i}>
//               <LeadershipMember>
//                 <Image src={item.node.photo} />
//                 <Name>{item.node.name}</Name>
//                 <Title>{item.node.position}</Title>
//               </LeadershipMember>
//             </a>
//           ))}
//         </LeadershipScrolling>
//       </Section>
//     )
//   }
// }

// export default Leadership
