import React, { useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import HeaderDestinationsOpenMenu from './openMenu'
import useOnClickOutside from '../../../hooks/onClickOutside'
import GlobalUIButton from '../../global/UI/button'

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

	const [isOpen, setOpen] = useState(false)

	const ref = useRef()

	useOnClickOutside(ref, () => setOpen(false))

	return (
		<>
			<div className="header__menu-left-side-element" ref={ref}>
				<GlobalUIButton onClick={() => setOpen(true)}>Destinations</GlobalUIButton>
				{isOpen && <HeaderDestinationsOpenMenu directions={allStrapiDirections.edges} />}
			</div>
		</>
	)
}

export default HeaderDestinations
