import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = () => {
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

	return <Img fluid={data.strapiTours.preview_image.childImageSharp.fluid} />
}

export default Image
