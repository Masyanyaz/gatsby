import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/default/layout"
import ProgramCards from "../components/programs/cards/cards"
import Filters from "../components/programs/filters"

import "./directions.css"

const DirectionsPage = (props) => {

  const data = props.data
  const context = props.pageContext

  return (
    <Layout>
      <h1>{ data.strapiDirections.name }</h1>
      <div>Описание</div>
      <hr />
      <h2>Фильтры:</h2>
      <Filters types={ context.types } pagePath={ context.pagePath } />
      <hr />
      <div className="preview__grid">
        { data.allStrapiTours.edges.map(({ node }) => (
          <ProgramCards key={ node.id } node={ node } pagePath={ context.pagePath } />
        )) }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pagePath: String!, $typePath: String, $catPath: String) {
    strapiDirections(path: {eq: $pagePath}) {
      name
    }
    allStrapiTours(
      filter: {
        direction: {
          path: {
            eq: $pagePath
          }
        }
        types: {
          elemMatch: {
            path: {
              eq: $typePath
            }
          }
        }
        category: {
          path: {
            eq : $catPath
          }
        }
      }
    ) {
      edges {
        node {
          id
          name
          path
          preview_text
          day_count
          days{
            id
          }
          types {
            id
            name
            path
            img {
              publicURL
            }
          }
          category {
            id
            name
            path
          }
        }
      }
    }
  }
`

export default DirectionsPage
