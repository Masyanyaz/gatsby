import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import GeneralPricesMinMax from '../../../general/prices/minMax'
import Link from '../../global/link'

const PreviewImage = ({ directionPath, backPath, category, path, prices }) => {
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

	const pricesArray = prices.reduce((res, price) => {
		const prices = price.count.map(({ value }) => value)
		return [...res, ...prices]
	}, [])

	return (
		<div className="preview__block-top">
			<Link
				to={`/catalogue/programs/${directionPath}/tours/${category.path}/${path}/`}
				className="preview__block-top-picture"
				state={{ back: backPath }}
			>
				<Img fluid={data.strapiTours.preview_image.childImageSharp.fluid} />
			</Link>
			<div className="preview__block-top-type">
				<GeneralPricesMinMax prices={pricesArray} />
			</div>
		</div>
	)
}

export default PreviewImage
