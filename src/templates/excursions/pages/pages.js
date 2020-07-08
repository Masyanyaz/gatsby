import React from 'react'
import { graphql } from 'gatsby'

import PagesLayout from '../../../layouts/pages/pages'

import './pages.css'

const ExcursionsPage = (props) => {
	const data = props.data.strapiExcursions

	return (
		<PagesLayout directionName={data.direction.name}>
			<p>{data.name}</p>
			<p>{data.direction.name}</p>
		</PagesLayout>
	)
}

export const query = graphql`
	query($pagePath: String!) {
		strapiExcursions(path: { eq: $pagePath }) {
			name
			direction {
				name
			}
		}
	}
`

export default ExcursionsPage
