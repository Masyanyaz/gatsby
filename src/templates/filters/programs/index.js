import React, { createContext } from 'react'
import { graphql } from 'gatsby'

import './index.css'

import LayoutsFilters from '../../../layouts/filters'
import PreviewTours from '../../../components/preview/tours'
import GeneralFilter from '../../../general/filter'
// TODO: Переименовать!
// import Combine from './asd'

export const TourFilterInfo = createContext(false)

const FiltersPage = (props) => {
	const { strapiDirections, allStrapiTours } = props.data
	const context = props.pageContext
	const backPath = props.path
	const directionPath = context.directionPath

	const tourFilterInfoContext = {
		direction: strapiDirections,
		directionPath: directionPath,
	}

	return (
		<TourFilterInfo.Provider value={tourFilterInfoContext}>
			<LayoutsFilters>
				<h1>{directionPath ? strapiDirections.name : 'Все направления'}</h1>
				<div>Описание</div>
				<hr />
				<h2>Фильтры:</h2>
				<GeneralFilter {...context} />
				<hr />
				<div className="preview__grid">
					{allStrapiTours.edges.length
						? allStrapiTours.edges.map(({ node }) => (
								<PreviewTours key={node.id} node={node} backPath={backPath} />
						  ))
						: 'Туров с данными фильтрами не найдено'}
				</div>
				{/*<Combine
						towns={strapiDirections.towns}
						directionPath={context.directionPath}
						backPath={backPath}
					/>*/}
			</LayoutsFilters>
		</TourFilterInfo.Provider>
	)
}

export const query = graphql`
	query($directionPath: String, $categoryPath: String, $guidePath: String) {
		strapiDirections(path: { eq: $directionPath }) {
			...directionMain
			...directionTours
			...directionExcursions
		}
		allStrapiTours(
			filter: {
				direction: { path: { eq: $directionPath } }
				categories: { elemMatch: { path: { eq: $categoryPath } } }
				guide: { path: { eq: $guidePath } }
			}
		) {
			edges {
				node {
					...toursMain
					...toursDirection
					...toursPrices
					...toursDays
					...toursCategories
					...toursTowns
					...toursPriceType
					...toursSeason
					preview_text
				}
			}
		}
	}
`

export default FiltersPage
