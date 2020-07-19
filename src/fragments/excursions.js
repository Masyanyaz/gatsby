import { graphql } from 'gatsby'

export const excursionMain = graphql`
	fragment excursionMain on StrapiExcursions {
		id
		name
		path
	}
`

export const excursionPrices = graphql`
	fragment excursionPrices on StrapiExcursions {
		prices {
			id
			count
			value
		}
	}
`

export const excursionTransports = graphql`
	fragment excursionTransports on StrapiExcursions {
		transports {
			id
			name
			image {
				publicURL
			}
		}
	}
`

export const excursionDirection = graphql`
	fragment excursionDirection on StrapiExcursions {
		direction {
			id
			name
			path
		}
	}
`
