import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/default/layout"

const DirectionsPage = (props) => {

  const data = props.data.allStrapiPrograms

  return (
    <Layout>
      {data.edges.map(edge => (
        <h1 key={edge.node.id}>{edge.node.name}</h1>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    allStrapiPrograms(
      filter: {
        direction: {
          url: {
            eq: $pagePath
          }
        }
      }
    ) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default DirectionsPage
