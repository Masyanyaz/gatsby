import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { graphql } from "gatsby"

import FiltersLayout from "../../../layouts/filters/filters"
import PreviewProgram from "../../../components/programs/preview/preview"

import Filters from "../../../components/programs/filters/filters"
import "./filters.css"
import { changeDirection, changeService } from "../../../store/url/actions"

const FiltersPage = (props) => {
  const data = props.data
  const context = props.pageContext
  const dispatch = useDispatch()

  const direction = useSelector(state => state.url.direction)
  const service = useSelector(state => state.url.service)

  useEffect(() => {
    dispatch(changeDirection(data.strapiDirections.path))
    dispatch(changeService('tour'))
  }, [direction, service])

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
      path
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
