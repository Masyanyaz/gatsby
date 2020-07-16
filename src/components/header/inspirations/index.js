import React, { useRef, useState } from 'react'

import { graphql, useStaticQuery } from 'gatsby'
import useOnClickOutside from '../../../hooks/onClickOutside'
import InspirationsOpenMenu from './openMenu'

const HeaderInspirations = () => {
	const { allStrapiCategories } = useStaticQuery(graphql`
		{
			allStrapiCategories {
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
				Inspirations
				{isOpen && <InspirationsOpenMenu items={allStrapiCategories.edges} />}
			</div>
		</>
	)
}

export default HeaderInspirations