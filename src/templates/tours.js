import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/default/layout"

const ToursPage = (props) => {

  const data = props.data.strapiTours

  return (
    <Layout>
      <h1>{data.name}</h1>

    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
      strapiTours(
        path: {
          eq: $pagePath
        }
      ) {
      name
    }
  }
`

export default ToursPage
