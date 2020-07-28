import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import HeaderInspirationsOpenMenu from './openMenu'

const HeaderInspirations = () => {
	const { allStrapiInspirations } = useStaticQuery(graphql`
		{
			allStrapiInspirations {
				edges {
					node {
						...inspirationMain
					}
				}
			}
		}
	`)

	return <HeaderInspirationsOpenMenu items={allStrapiInspirations.edges} />
}

export default HeaderInspirations
