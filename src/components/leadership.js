import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link, Flex } from "rebass"
import { Contributor } from "react-landing-page"
import styled from "styled-components"

const Section = styled.section`
  background-color: ${props => props.theme.grey["800"]};
  color: #FFF;
  padding: 3rem 2rem;
`

const useLeadershipData = () => {
  const data = useStaticQuery(
    graphql`
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
  )
  return data.allLeadershipJson.edges
}

const Leadership = () => {
  const data = useLeadershipData()
  return (
    <Section>
      <Flex justifyContent="space-around">
        {data.map(item => (
          <Contributor
            fullName={item.node.name}
            title={item.node.position}
            avatar={item.node.photo}
            key={item.node.id}
          >
            <Link
              href={item.node.linkedin}
              sx={{
                display: "inline-block",
                fontWeight: "bold",
                px: 2,
                py: 1,
                color: "inherit",
              }}
            >
              LinkedIn
            </Link>
          </Contributor>
        ))}
      </Flex>
    </Section>
  )
}

export default Leadership
