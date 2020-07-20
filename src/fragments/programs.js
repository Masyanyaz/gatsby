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
			icon
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

export const toursSeason = graphql`
	fragment toursSeason on StrapiTours {
		season {
			id
			name
			image {
				publicURL
			}
		}
	}
`

export const toursDirections = graphql`
	fragment toursDirections on StrapiTours {
		directions {
			id
			name
			path
		}
	}
`

export const toursPriceType = graphql`
	fragment toursPriceType on StrapiTours {
		priceType {
			id
			name
			image {
				publicURL
			}
		}
	}
`

export const toursIcons = graphql`
	fragment toursIcons on StrapiTours {
		icons {
			id
			name
			image {
				publicURL
			}
		}
	}
`
