import React, { useRef, useState } from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import DestinationsOpenMenu from './openMenu'
import useOnClickOutside from '../../../hooks/onClickOutside'
import useWindowSize from '../../../hooks/windowSize'

const HeaderDestinations = () => {
	const { allStrapiDirections } = useStaticQuery(graphql`
		{
			allStrapiDirections {
				edges {
					node {
						id
						name
						path
					}
				}
			}
		}
	`)

	const [isOpen, setOpen] = useState(false)

	const ref = useRef()

	useOnClickOutside(ref, () => setOpen(false))

	return (
		<>
			<div className="header__menu-left-side-element" onClick={() => setOpen(true)} ref={ref}>
				Destinations
				{isOpen && <DestinationsOpenMenu items={allStrapiDirections.edges} />}
			</div>
		</>
	)
}

export default HeaderDestinations
