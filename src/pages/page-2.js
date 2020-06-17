import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allMongodbGatsbyCities {
      edges {
        node {
          title
        }
      }
    }
  }
`


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>{ props.data.allMongodbGatsbyCities.edges.map(item => (
      <div>{item.node.title}</div>
    )) }</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
