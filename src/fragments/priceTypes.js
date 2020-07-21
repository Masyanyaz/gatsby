import { graphql, useStaticQuery } from 'gatsby'

export const useAllPriceTypes = () => {
	const { allStrapiPriceTypes } = useStaticQuery(graphql`
		{
			...allPriceTypes
		}
	`)

	return allStrapiPriceTypes.edges
}

export const allPriceTypes = graphql`
	fragment allPriceTypes on Query {
		allStrapiPriceTypes {
			edges {
				node {
					id
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
`
