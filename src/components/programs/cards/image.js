import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const CardImage = ({ pagePath, category, path }) => {

  // TODO: Убрать запрос и картинку из запроса в directions
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
        to={ `/catalogue/programms/${ pagePath }/tours/${ category.path }/${ path }/` }
        className="preview__block-top-picture"
      >
        <Img fluid={ data.strapiTours.preview_image.childImageSharp.fluid } />
      </Link>
      <Link to={ `../${ category.path }` } className="preview__block-top-type">
        { category.name }
      </Link>
    </div>
  )
}

export default CardImage
