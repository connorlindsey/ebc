import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Section = styled.section`
  background-color: ${props => props.theme.grey["800"]};
  color: #fff;
  padding: 3rem 2rem;
  overflow: hidden;
`

const LeadershipScrolling = styled.div`
  display: flex;
  transition: 0.1s all ease;
  transform: translateX(${props => props.pos}px);
  width: 95%;
  margin: 1rem auto;
  max-width: 800px;
`

const LeadershipMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 1rem;
  width: 125px;
`

const Image = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
`

const Name = styled.div``

const Title = styled.div``

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

  const [pos, setPos] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      if (pos < (data.length * -125)) setPos(1)
      setPos(pos - 1)
    }, 10)
    return () => clearInterval(interval)
  }, [pos])

  return (
    <Section id="leadership">
      <LeadershipScrolling pos={pos}>
        {data.map(item => (
          <a href={item.node.linkedin} key={item.node.id}>
            <LeadershipMember>
              <Image src={item.node.photo} />
              <Name>{item.node.name}</Name>
              <Title>{item.node.position}</Title>
            </LeadershipMember>
          </a>
        ))}
      </LeadershipScrolling>
    </Section>
  )
}

export default Leadership
