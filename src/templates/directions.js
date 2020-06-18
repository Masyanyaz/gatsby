import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/default/layout"
import PreviewProgram from "../components/programs/preview"
import Filters from "../components/programs/filters"

import './directions.css'

const DirectionsPage = (props) => {

  const data = props.data

  return (
    <Layout>
      <h1>{ data.strapiDirections.name }</h1>
      <div>Описание</div>
      <hr/>
      <h2>Фильтры:</h2>
      <Filters types={props.pageContext.types} pagePath={props.pageContext.pagePath} />
      <hr/>
      <div className="preview__grid">
          { data.allStrapiTours.edges.map(({ node }) => (
              <PreviewProgram key={ node.id } node={ node } pagePath={props.pageContext.pagePath} />
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
            icon{
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
