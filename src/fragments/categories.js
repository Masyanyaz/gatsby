import { graphql, useStaticQuery } from 'gatsby'

export const useAllCategories = () => {
	const { allStrapiCategories } = useStaticQuery(graphql`
		{
			...allCategories
		}
	`)

	return allStrapiCategories.edges
}

export const allCategories = graphql`
	fragment allCategories on Query {
		allStrapiCategories {
			edges {
				node {
					...categoryMain
					...categoryTours
				}
			}
		}
	}
`

export const categoryMain = graphql`
	fragment categoryMain on StrapiCategories {
		id
		strapiId
		name
		path
	}
`

export const categoryTours = graphql`
	fragment categoryTours on StrapiCategories {
		tours {
			id
		}
	}
`
