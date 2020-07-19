import React from 'react'
import { graphql } from 'gatsby'

import TemplatesEndPagesCommon from '../../../templates/endPages/common'

const ProgramsPage = (props) => {
	const { allStrapiDirections } = props.data

	return (
		<TemplatesEndPagesCommon
			h1={'Общая страница с описанием услуги "Туры"'}
			title={'Туры'}
			description={'Туры'}
			url={'tours'}
			directions={allStrapiDirections}
		/>
	)
}

export const query = graphql`
	{
		allStrapiDirections(filter: { tours: { elemMatch: { id: { ne: null } } } }) {
			edges {
				node {
					...directionMain
				}
			}
		}
	}
`

export default ProgramsPage
