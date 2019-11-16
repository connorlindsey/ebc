import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Card, Heading, Text } from "rebass"
import styled from "styled-components"

import educationBackgroundImage from "../../content/assets/education_background.jpg"

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.grey["100"]};
  background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0.5)),
    url("${educationBackgroundImage}");
  object-fit: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 5rem;
  color: #fff;

  h2 {
    text-align: center;
  }
`

const BlogGrid = styled.div`
  width: 95%;
  margin: 2rem auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-gap: 1rem;
`

const usePostData = () => {
  const data = useStaticQuery(
    graphql`
      query asdfPostDataQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/education/" } }
        ) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                description
                photo
              }
            }
          }
        }
      }
    `
  )
  return data.allMarkdownRemark.edges
}

const Education = () => {
  const data = usePostData()
  return (
    <Section id="learn">
      <Heading fontSize={[5, 6, 7]}>Education Corner</Heading>
      <BlogGrid>
        {data.map(item => (
          <Card width={[200, 256, 320]} mx="auto" key={item.node.id}>
            <img src={item.node.frontmatter.photo} alt="Education Background" />
            <Link to={`/posts${item.node.fields.slug}`}>
              <h3>{item.node.frontmatter.title}</h3>
            </Link>
            <p>{item.node.frontmatter.date}</p>
            <Text width={220}>{item.node.excerpt}</Text>
          </Card>
        ))}
      </BlogGrid>
    </Section>
  )
}

export default Education
