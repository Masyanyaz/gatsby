import { graphql } from 'gatsby'

export const toursMain = graphql`
	fragment toursMain on StrapiTours {
		id
		name
		path
	}
`

export const toursDays = graphql`
	fragment toursDays on StrapiTours {
		days {
			id
			name
			text
			image {
				publicURL
			}
		}
	}
`

export const toursCategories = graphql`
	fragment toursCategories on StrapiTours {
		categories {
			id
			name
			path
		}
	}
`

export const toursPrices = graphql`
	fragment toursPrices on StrapiTours {
		prices {
			id
			name
			count {
				count
				value
			}
		}
	}
`

export const toursTowns = graphql`
	fragment toursTowns on StrapiTours {
		towns {
			id
			name
		}
	}
`

export const toursGuide = graphql`
	fragment toursGuide on StrapiTours {
		guide {
			id
			name
			path
		}
	}
`

export const toursSeasons = graphql`
	fragment toursSeasons on StrapiTours {
		seasons {
			id
			name
			image {
				publicURL
			}
		}
	}
`

export const toursDirection = graphql`
	fragment toursDirection on StrapiTours {
		direction {
			id
			name
			path
		}
	}
`
