import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Card, Heading, Text } from "rebass"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  background-color: ${props => props.theme.grey["800"]};
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
`

const Title = styled.h3`
  margin-bottom: 4px;
`

const Date = styled.p`
  font-size: 16px;
  color: ${props => props.theme.grey["500"]};
`

const usePostData = () => {
  const data = useStaticQuery(
    graphql`
      query PostDataQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 4
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 50)
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
      <Heading fontSize={[5, 6, 7]} marginTop={-45}>
        Club News
      </Heading>
      <BlogGrid>
        {data.map(item => (
          <Card
            width={[200, 256, 320]}
            mx="auto"
            key={item.node.id}
            marginBottom={30}
          >
            <Link to={`/posts${item.node.fields.slug}`}>
              <Title>{item.node.frontmatter.title}</Title>
            </Link>
            <Date>{item.node.frontmatter.date}</Date>
            <Text width={220} marginTop={-20}>
              {item.node.excerpt}
            </Text>
          </Card>
        ))}
      </BlogGrid>
    </Section>
  )
}

export default PostsSection
