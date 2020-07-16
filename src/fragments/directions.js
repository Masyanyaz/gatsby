import { graphql } from 'gatsby'

export const mainDirectionProps = graphql`
	fragment mainDirectionProps on StrapiDirections {
		id
		strapiId
		name
		path
	}
`
