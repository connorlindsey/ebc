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
  grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
  grid-gap: 1rem;
`

const usePostData = () => {
  const data = useStaticQuery(
    graphql`
      query PostDataQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              id
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `
  )
  return data.allMarkdownRemark.edges
}

const PostsSection = () => {
  const data = usePostData()
  return (
    <Section id="news">
      <h2>Club News</h2>
      <BlogGrid>
        {data.map(item => (
          <Card width={[256, 320]} mx="auto" key={item.node.id}>
            <Link to={`/posts${item.node.fields.slug}`}>
              <h3>{item.node.frontmatter.title} hey there</h3>
            </Link>
            <p>{item.node.frontmatter.date}</p>
            <p>{item.node.excerpt}</p>
          </Card>
        ))}
      </BlogGrid>
    </Section>
  )
}

export default PostsSection
