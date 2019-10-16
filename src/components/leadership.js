import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const useLeadershipData = () => {
  const data = useStaticQuery(
    graphql`
    query LeadershipQuery {
      allFile (filter: {sourceInstanceName: {eq: "leadership"}}) {
        edges {
          node {
            id
            name
          }
        }
      }
    }`
  )
  return data.allFile.edges
}

function leadership() {
  const leadership = useLeadershipData();
  console.log("Data: ", leadership)
  return (
    <div>
      <h3>Check out our team</h3>
      <ul>{leadership.map(l => <li key={l.node.name}>{l.node.name}</li>)}</ul>
    </div>
  )
}

export default leadership
