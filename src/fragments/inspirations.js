import { graphql } from 'gatsby'

export const inspirationMain = graphql`
	fragment inspirationMain on StrapiInspirations {
		id
		name
		path
	}
`
