import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const PreviewToursIcons = ({ priceTypeId, seasonId, categoryId }) => {
	//TODO проверить image.publicURL у season и priceType (в PreviewToursIcons вместо id передавать весь массив season и priceType, у некоторых туров был null)

	const data = useStaticQuery(graphql`
		query {
			allStrapiSeasons {
				edges {
					node {
						strapiId
						name
						image {
							childImageSharp {
								fixed(width: 32) {
									...GatsbyImageSharpFixed
								}
							}
						}
					}
				}
			}
			allStrapiPriceTypes {
				edges {
					node {
						strapiId
						name
						image {
							childImageSharp {
								fixed(width: 32) {
									...GatsbyImageSharpFixed
								}
							}
						}
					}
				}
			}
			allStrapiIcons {
				edges {
					node {
						strapiId
						name
						image {
							childImageSharp {
								fixed(width: 32) {
									...GatsbyImageSharpFixed
								}
							}
						}
					}
				}
			}
		}
	`)

	const season = data.allStrapiSeasons.edges.find(({ node }) => node.strapiId === seasonId)
	const category = data.allStrapiIcons.edges.find(({ node }) => node.strapiId === categoryId)
	const priceType = data.allStrapiPriceTypes.edges.find(({ node }) => node.strapiId === priceTypeId)

	return (
		<div className="preview__block-icons">
			<Img
				className="preview__block-icons-img"
				fixed={season.node.image.childImageSharp.fixed}
				alt=""
				title={season.node.name}
			/>
			<Img
				className="preview__block-icons-img"
				fixed={priceType.node.image.childImageSharp.fixed}
				alt=""
				title={priceType.node.name}
			/>
			<Img
				className="preview__block-icons-img"
				fixed={category.node.image.childImageSharp.fixed}
				alt=""
				title={category.node.name}
			/>
		</div>
	)
}

export default PreviewToursIcons
