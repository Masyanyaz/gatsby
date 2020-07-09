import React from 'react'
import { graphql } from 'gatsby'

import PagesLayout from '../../../layouts/pages/pages'

import './pages.css'

const ExcursionsPage = (props) => {
	const data = props.data.strapiExcursions

	return (
		<PagesLayout directionName={data.direction.name}>
			<div className="programm__img">
				<img
					src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg"
					alt=""
				/>
			</div>
			<h1>{data.name}</h1>
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
