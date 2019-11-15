import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Card } from "rebass"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.grey["100"]};
  padding: 4rem 5rem;

  h2 {
    text-align: center;
  }
`

const BlogGrid = styled.div`
  width: 95%;
  margin: 2rem auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
      <h2>Education Corner</h2>
      <BlogGrid>
        {data.map(item => (
          <Card width={[256, 320]} mx="auto" key={item.node.id}>
            <img src={item.node.frontmatter.photo} alt="Stock image" />
            <Link to={`/posts${item.node.fields.slug}`}>
              <h3>{item.node.frontmatter.title}</h3>
            </Link>
            <p>{item.node.frontmatter.date}</p>
            <p>{item.node.excerpt}</p>
          </Card>
        ))}
      </BlogGrid>
    </Section>
  )
}

export default Education
