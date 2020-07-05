import React from "react"
import { graphql } from "gatsby"

import FiltersLayout from "../../../layouts/filters/filters"
import PreviewProgram from "../../../components/programs/preview/preview"
import Filters from "../../../components/programs/filters/filters"

import "./filters.css"

const FiltersPage = (props) => {

  const data = props.data
  const context = props.pageContext

  return (
    <FiltersLayout directionName={ data.strapiDirections.name }>
      <h1>{ data.strapiDirections.name }</h1>
      <div>Описание</div>
      <hr />
      <h2>Фильтры:</h2>
      <Filters
        pathPage={ context.pathPage }{ ...context }
      />
      <hr />
      <div className="preview__grid">
        {
          data.allStrapiTours.edges.length ?
            data.allStrapiTours.edges.map(({ node }) => (
              <PreviewProgram
                key={ node.id }
                node={ node }
                directionPath={ context.directionPath }
              />
            )) :
            "Туров с данными фильтрами не найдено"
        }
      </div>
    </FiltersLayout>
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
