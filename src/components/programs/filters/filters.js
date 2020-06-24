import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"

import './filters.css'

const Filters = ({types, pagePath, categories}) => {
    console.log(categories)
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
                    data.allStrapiDirections.edges.map(({node: {id, name, path}}) => (
                        <Link
                            to={`/catalogue/filters/${path}/tours/all/`}
                            key={id} style={{marginRight: "10px"}}
                            activeClassName={'active'}
                        >
                            {name}
                        </Link>
                    ))
                }
            </div>
            <div>
                <Link
                    to={`/catalogue/filters/${pagePath}/tours/all/`}
                    style={{marginRight: "10px"}}
                    activeClassName={'active'}
                >
                    Все
                </Link>
                {
                    categories.map(({node: {id, name, path}}) => (
                        <Link
                            to={`/catalogue/filters/${pagePath}/tours/${path}/`}
                            key={id}
                            activeClassName={'active'}
                            style={{marginRight: "10px"}}
                        >
                            {name}
                        </Link>
                    ))
                }
            </div>
            <div>
                <Link
                    to={`/catalogue/filters/${pagePath}/tours/all/`}
                    style={{marginRight: "10px"}}
                    activeClassName={'active'}
                >
                    Все
                </Link>
                {
                    types.map(({node: {id, name, path}}) => (
                        <Link
                            to={`/catalogue/filters/${pagePath}/tours/${path}/`}
                            key={id}
                            activeClassName={'active'}
                            style={{marginRight: "10px"}}
                        >
                            {name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Filters
