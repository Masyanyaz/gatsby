import { graphql, useStaticQuery } from 'gatsby'

export const useAllIcons = () => {
	const { allStrapiIcons } = useStaticQuery(graphql`
		{
			...allIcons
		}
	`)

	return allStrapiIcons.edges
}

export const allIcons = graphql`
	fragment allIcons on Query {
		allStrapiIcons {
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
