import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../layouts/default/layout"
import PreviewProgram from "../../../components/programs/preview/preview"
import Filters from "../../../components/programs/filters/filters"

import "./filters.css"

const FiltersPage = (props) => {

  const data = props.data
  const context = props.pageContext
  const types = context.pathPage.type.split('/')

  let filtered

  if(types[0] === 'all') {
    filtered = data.allStrapiTours.edges
  } else {
    filtered = data.allStrapiTours.edges.filter(tour => {
      return types.every(type => tour.node.types.map(({ path }) => path).includes(type))
    })
  }

  return (
    <Layout rightColumn={ true } directionName={ data.strapiDirections.name }>
      <h1>{ data.strapiDirections.name }</h1>
      <div>Описание</div>
      <hr />
      <h2>Фильтры:</h2>
      <Filters
        pathPage={context.pathPage}
        { ...context }
      />
      <hr />
      <div className="preview__grid">
        { filtered.map(({ node }) => (
          <PreviewProgram
            key={ node.id }
            node={ node }
            pagePath={ context.pagePath }
          />
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
          prices {
            types {
              value
            }
          }
          days {
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
          towns{
            id
            name
          }
        }
      }
    }
  }
`

export default FiltersPage
