import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../layouts/default/layout"

import "./pages.css"

const ExcursionsPage = (props) => {

  const data = props.data.strapiExcursions

  return (
    <Layout rightColumn={ true } directionName={ data.direction.name }>
      <p>{ data.name }</p>
      <p>{ data.direction.name }</p>
    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!) {
    strapiExcursions (
      path: {
        eq: $pagePath
      }
    ) {
      name
      direction {
        name
      }
    }
  }
`

export default ExcursionsPage
