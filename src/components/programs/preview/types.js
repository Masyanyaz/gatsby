import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const PreviewTypes = ({ directionPath, types }) => {

  const { strapiTypes } = useStaticQuery(graphql`
    query {
      strapiTypes(strapiId: {eq: 9}) {
        name
        id
        path
        img {
          publicURL
        }
      }
    }
  `)

  types.length = Math.min(types.length, 2)

  return (
    <>
      {
        [...types, strapiTypes].map(type => (
          <div key={ type.id }>
            <img src={ type.img.publicURL } title={ type.name } alt="" />
          </div>
        ))
      }
    </>
  )
}

export default PreviewTypes
