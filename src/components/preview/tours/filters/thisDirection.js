import React from 'react'
import PropTypes from 'prop-types'

import PreviewTours from '../index'
import PreviewChunkOutput from '../../chunkOutput'

import { useAllTours } from '../../../../fragments/programs'

const PreviewToursThisDirection = ({ directionPath, backPath }) => {
	const tours = useAllTours()

	const filteredTours = tours.filter(({ node: { directions } }) => {
		const [main] = directions.map(({ path }) => path)

		return main.includes(directionPath)
	})

	return (
		<>
			{filteredTours.length > 0 && directionPath ? (
				<section>
					<h2>Извиняйте, гляньте другие туры по НАПРАВЛЕНИЮ</h2>
					<PreviewChunkOutput array={filteredTours} backPath={backPath} component={PreviewTours} />
				</section>
			) : (
				'Туров с данными фильтрами не найдено'
			)}
		</>
	)
}

PreviewToursThisDirection.propTypes = {
	directionPath: PropTypes.string,
	backPath: PropTypes.string.isRequired,
}

export default PreviewToursThisDirection
