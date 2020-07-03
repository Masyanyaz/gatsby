import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./filters.css"

const Filters = ({ directionPath, categories, seasons, categoryPath, seasonPath, typePath }) => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiDirections(filter: {
          tours: {
            elemMatch: {
              id: {
                ne: null
              }
            }
          }
        }) {
          edges {
            node {
              id
              name
              path
            }
          }
        }
    }
  `)

  return (
    <div>
      <div>
        {
          data.allStrapiDirections.edges.map(({ node: { id, name, path } }) => (
            <Link
              to={ `/catalogue/filters/tours/${ path }/${ categoryPath || 'all' }/${ seasonPath || 'all' }/${ typePath || 'all' }` }
              key={ id } style={ { marginRight: "10px" } }
              activeClassName={ "active" }
            >
              { name }
            </Link>
          ))
        }
      </div>
      <div>
        <Link
          to={ `/catalogue/filters/tours/${ directionPath }/all/${ seasonPath || 'all' }/${ typePath || 'all' }` }
          style={ { marginRight: "10px" } }
          activeClassName={ "active" }
        > Все </Link> {
        categories.map(({ node: { id, name, path } }) => (
          <Link
            to={ `/catalogue/filters/tours/${ directionPath }/${ path }/${ seasonPath || 'all' }/${ typePath || 'all' }` }
            key={ id }
            activeClassName={ "active" }
            style={ { marginRight: "10px" } }
          >
            { name }
          </Link>
        ))
      }
      </div>
      <div>
        <Link
          to={ `/catalogue/filters/tours/${ directionPath }/${ categoryPath || 'all' }/all/${ typePath || 'all' }` }
          style={ { marginRight: "10px" } }
          activeClassName={ "active" }
        > Все </Link>
        {
          seasons.map(({ node: { id, name, path } }) => (
            <Link
              to={ `/catalogue/filters/tours/${ directionPath }/${ categoryPath || 'all' }/${ path }/${ typePath || 'all' }` }
              key={ id }
              activeClassName={ "active" }
              style={ { marginRight: "10px" } }
            >
              { name }
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Filters
