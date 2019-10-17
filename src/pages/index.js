import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/button"
import Leadership from "../components/leadership"
import Calendar from "../components/calendar"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Engineers in Business"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <img style={{ margin: 0 }} src="./assets/EB.jpg" alt="Engineering Building at BYU" />
        <Leadership />
        <Link to="/posts/">
          <Button marginTop="35px">Recent Posts</Button>
        </Link>
        <Link to="/education/">
          <Button marginTop="35px">Education Corner</Button>
        </Link>
        <Calendar />
      </Layout>
    )
  }
}

export default IndexPage
