import React, { useEffect } from "react"
import { graphql } from "gatsby"

import { useDispatch, useSelector } from "react-redux"

import FiltersLayout from "../../../layouts/filters/filters"

import Link from "../../../components/global/link"

import "./filters.css"

import {changeDirection, changeService} from "../../../store/url/actions"

const FiltersPage = (props) => {

  const dispatch = useDispatch()
  const direction = useSelector(state => state.url.direction)
  const service = useSelector(state => state.url.service)
  const data = props.data

  useEffect(() => {
    dispatch(changeDirection(data.strapiDirections.path))
    dispatch(changeService('excursion'))
  }, [direction, service])

  return (
    <FiltersLayout directionName={ data.strapiDirections.name }>
      <h1>{ data.strapiDirections.name }</h1>
      <div>Описание</div>
      <hr />
      <div className="preview__grid">
        { data.allStrapiExcursions.edges.length ?
          data.allStrapiExcursions.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={`/catalogue/programs/${ data.strapiDirections.path }/excursion/${node.category.path}/${node.path}`}>
                { node.name }
              </Link>
            </div>
        )) :
          'Экскурсий не найдено'
        }
      </div>
    </FiltersLayout>
  )
}

export const query = graphql`
  query($directionPath: String!) {
    strapiDirections(path: {eq: $directionPath}) {
      name
      path
    }
    allStrapiExcursions(
      filter: {
        direction: {
          path: {
            eq: $directionPath
          }
        }
      }
    ) {
      edges {
        node {
          id
          name
          path
          category {
            path
          }
        }
      }
    }
  }
`

export default FiltersPage
