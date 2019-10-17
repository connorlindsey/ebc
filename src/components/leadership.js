import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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

function Leadership() {
  const data = useLeadershipData()
  return (
    <div>
      <h3>Check out our team</h3>
      <ul>
        {data.map(l => (
          <li key={l.node.id}>
            {l.node.name}
            <a href={l.node.linkedin}>LinkedIn</a>
            {l.node.position}
            <img src={l.node.photo} alt="Leadership member"></img>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Leadership
