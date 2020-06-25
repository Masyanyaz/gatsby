import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./filters.css"

const Filters = ({ types, pagePath, categories, seasons, pathPage }) => {
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
              to={ `/catalogue/filters/${ path }/tours/${ pathPage.category }/${ pathPage.season }/${ pathPage.type }` }
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
          to={ `/catalogue/filters/${ pagePath }/tours/all/${ pathPage.season }/${ pathPage.type }` }
          style={ { marginRight: "10px" } }
          activeClassName={ "active" }
        > Все </Link> {
        categories.map(({ node: { id, name, path } }) => (
          <Link
            to={ `/catalogue/filters/${ pagePath }/tours/${ path }/${ pathPage.season }/${ pathPage.type }` }
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
          to={ `/catalogue/filters/${ pagePath }/tours/${ pathPage.category }/all/${ pathPage.type }` }
          style={ { marginRight: "10px" } }
          activeClassName={ "active" }
        >
          Все
        </Link>
        {
          seasons.map(({ node: { id, name, path } }) => (
            <Link
              to={ `/catalogue/filters/${ pagePath }/tours/${ pathPage.category }/${ path }/${ pathPage.type }` }
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
          to={ `/catalogue/filters/${ pagePath }/tours/${ pathPage.category }/${ pathPage.season }/all` }
          style={ { marginRight: "10px" } }
          activeClassName={ "active" }
        > Все </Link>
        {
          types.map(({ node: { id, name, path } }) => (
            <Link
              to={ `/catalogue/filters/${ pagePath }/tours/${ pathPage.category }/${ pathPage.season }/${ path }` }
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
