import { graphql } from 'gatsby'

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
