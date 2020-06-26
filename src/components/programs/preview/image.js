import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const PreviewImage = ({ pagePath, category, path, prices }) => {

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

  const pricesArray = prices.map(price => price.value)

  return (
    <div className="preview__block-top">
      <Link
        to={ `/catalogue/programms/${ pagePath }/tours/${ category.path }/${ path }/` }
        className="preview__block-top-picture"
      >
        <Img fluid={ data.strapiTours.preview_image.childImageSharp.fluid } />
      </Link>
      <div className="preview__block-top-type">
        {
          prices.length ?
            `${ Math.min(...pricesArray) } - ${ Math.max(...pricesArray) }` :
            `price`
        }
      </div>
    </div>
  )
}

export default PreviewImage
