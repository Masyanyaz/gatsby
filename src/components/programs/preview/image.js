import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import MinMaxPriceBlock from "../pages/prices/minMaxPrice"

const PreviewImage = ({ directionPath, category, path, prices }) => {

  // TODO: Убрать запрос и картинку из запроса в filters
  const data = useStaticQuery(graphql`
    query {
      strapiTours {
        preview_image {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div className="preview__block-top">
      <Link
        to={ `/catalogue/programs/${ directionPath }/tours/${ category.path }/${ path }/` }
        className="preview__block-top-picture"
      >
        <Img fluid={ data.strapiTours.preview_image.childImageSharp.fluid } />
      </Link>
      <div className="preview__block-top-type">
        <MinMaxPriceBlock prices={ prices } />
      </div>
    </div>
  )
}

export default PreviewImage
