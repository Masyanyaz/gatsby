import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts/default/layout"
import SEO from "../components/seo"



const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    { data.allStrapiTypes.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={`/${node.path}/`}>{node.name}</Link>
      </div>
    )) }
  </Layout>
)

export const query = graphql`
  query {
    allStrapiTypes {
      edges {
        node {
          id
          name
          path
        }
      }
    }
  }
`

export default IndexPage
