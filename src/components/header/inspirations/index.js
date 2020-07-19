import React, { useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import useOnClickOutside from '../../../hooks/onClickOutside'
import HeaderInspirationsOpenMenu from './openMenu'
import GlobalUIButton from '../../global/UI/button'

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

	const [isOpen, setOpen] = useState(false)

	const ref = useRef()

	useOnClickOutside(ref, () => setOpen(false))

	return (
		<>
			<div className="header__menu-left-side-element" ref={ref}>
				<GlobalUIButton onClick={() => setOpen(true)}>Inspirations</GlobalUIButton>
				{isOpen && <HeaderInspirationsOpenMenu inspirations={allStrapiInspirations.edges} />}
			</div>
		</>
	)
}

export default HeaderInspirations
