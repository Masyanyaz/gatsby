import React from 'react'
import { graphql } from 'gatsby'

import TemplatesEndPagesCommon from '../../../templates/endPages/common'

const ExcursionsPage = (props) => {
	const { allStrapiDirections } = props.data

	return (
		<TemplatesEndPagesCommon
			h1={'Общая страница с описанием услуги "Экскурсии"'}
			title={'Экскурсии'}
			description={'Экскурсии'}
			url={''}
			directions={allStrapiDirections}
		/>
	)
}

export const query = graphql`
	{
		allStrapiDirections(filter: { excursions: { elemMatch: { id: { ne: null } } } }) {
			edges {
				node {
					...directionMain
				}
			}
		}
	}
`

export default ExcursionsPage
