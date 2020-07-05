import React from "react"
import { graphql } from "gatsby"

import FiltersLayout from "../../../layouts/filters/filters"

import "./pages.css"

const ExcursionsPage = (props) => {

  const data = props.data.strapiExcursions

  return (
    <FiltersLayout directionName={ data.direction.name }>
      <p>{ data.name }</p>
      <p>{ data.direction.name }</p>
    </FiltersLayout>
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
