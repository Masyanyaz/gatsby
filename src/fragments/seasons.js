import { graphql, useStaticQuery } from 'gatsby'

export const useAllSeasons = () => {
	const { allStrapiSeasons } = useStaticQuery(graphql`
		{
			...allSeasons
		}
	`)

	return allStrapiSeasons.edges
}

export const allSeasons = graphql`
	fragment allSeasons on Query {
		allStrapiSeasons {
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
