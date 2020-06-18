import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import './filters.css'

const Filters = ({ types, pagePath }) => {

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
          data.allStrapiDirections.edges.map(({ node }) => (
            <Link
              to={ `/catalogue/filters/${ node.path }/tours/all/` }
              key={ node.id } style={ { marginRight: "10px" } }
              activeClassName={'active'}
            >
              { node.name }
            </Link>
          ))
        }
      </div>
      <div>
        <Link
          to={ `/catalogue/filters/${ pagePath }/tours/all/` }
          style={ { marginRight: "10px" } }
          activeClassName={'active'}
        >
          Все
        </Link>
        {
          // types.map(({ node }) => (
          //   <Link
          //     to={ `/catalogue/filters/${ pagePath }/tours/${ node.path }/` }
          //     key={ node.id }
          //     activeClassName={'active'}
          //     style={ { marginRight: "10px" } }
          //   >
          //     { node.name }
          //   </Link>
          // ))
        }
      </div>
    </div>
  )
}

export default Filters
