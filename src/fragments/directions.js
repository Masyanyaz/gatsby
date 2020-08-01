import { graphql, useStaticQuery } from 'gatsby'

export const useAllDirections = () => {
	const { allStrapiDirections } = useStaticQuery(graphql`
		{
			...allDirections
		}
	`)

	return allStrapiDirections.edges
}

export const allDirections = graphql`
	fragment allDirections on Query {
		allStrapiDirections {
			edges {
				node {
					...directionMain
					...directionTours
				}
			}
		}
	}
`

export const directionMain = graphql`
	fragment directionMain on StrapiDirections {
		id
		strapiId
		name
		path
	}
`

export const directionTours = graphql`
	fragment directionTours on StrapiDirections {
		tours {
			id
			name
			path
		}
	}
`

export const directionExcursions = graphql`
	fragment directionExcursions on StrapiDirections {
		excursions {
			id
			name
			path
		}
	}
`

export const directionTowns = graphql`
	fragment directionTowns on StrapiDirections {
		towns {
			id
			name
		}
	}
`
