import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import HeaderDestinationsOpenMenu from './openMenu'

const HeaderDestinations = () => {
	const { allStrapiDirections } = useStaticQuery(graphql`
		{
			allStrapiDirections {
				edges {
					node {
						...directionMain
					}
				}
			}
		}
	`)

	return <HeaderDestinationsOpenMenu items={allStrapiDirections.edges} />
}

export default HeaderDestinations
