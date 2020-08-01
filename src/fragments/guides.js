import { graphql, useStaticQuery } from 'gatsby'

export const useAllGuides = () => {
	const { allStrapiGuides } = useStaticQuery(graphql`
		{
			...allGuides
		}
	`)

	return allStrapiGuides.edges
}

export const allGuides = graphql`
	fragment allGuides on Query {
		allStrapiGuides {
			edges {
				node {
					...guideMain
					...guideTours
				}
			}
		}
	}
`

export const guideMain = graphql`
	fragment guideMain on StrapiGuides {
		id
		strapiId
		name
		path
	}
`

export const guideTours = graphql`
	fragment guideTours on StrapiGuides {
		tours {
			id
		}
	}
`
