import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../layouts/default/layout"
import PreviewProgram from "../../../components/programs/preview/preview"
import Filters from "../../../components/programs/filters/filters"

import "./filters.css"

const FiltersPage = (props) => {

  const data = props.data
  const context = props.pageContext
  const types = context.typePath ? context.typePath.split('/') : []

  console.log(context)
  let filtered

  if(!types.length) {
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
        { filtered.length ?
          filtered.map(({ node }) => (
            <PreviewProgram
              key={ node.id }
              node={ node }
              directionPath={ context.directionPath }
            />
        )) :
          'Туров с данными фильтрами не найдено'
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($directionPath: String!, $categoryPath: String, $seasonPath: String, $typePath: String) {
    strapiDirections(path: {eq: $directionPath}) {
      name
    }
    allStrapiTours(
      filter: {
        direction: {
          path: {
            eq: $directionPath
          }
        }
        category: {
          path: {
            eq : $categoryPath
          }
        }
        seasons: {
          elemMatch: {
            path: {
              eq: $seasonPath
            }
          }
        }
        types: {
          elemMatch: {
            path: {
              eq: $typePath
            }
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
        }
      }
    }
  }
`

export default FiltersPage
