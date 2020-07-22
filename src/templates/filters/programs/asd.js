import React, { useState } from 'react'

import PreviewTours from '../../../components/preview/tours'

import { useAllTours } from '../../../fragments/programs'
/*TODO: строница скролится вместе с добавлением элементов, надо что-то придумать
 *  вынести в отдельный компонент, попробовать переписать через чанки вместе slice*/

const ChunkOutput = ({ array, backPath }) => {
	const CHUNK_SIZE = 5
	const [chunkIndex, setChunkIndex] = useState(1)
	const hasHiddenElements = chunkIndex * CHUNK_SIZE < array.length - 1

	const handleClick = () => {
		if (hasHiddenElements) {
			setChunkIndex((chunkIndex) => chunkIndex + 1)
		}
	}

	return (
		<>
			<div className="preview__grid">
				{array.slice(0, chunkIndex * CHUNK_SIZE).map(({ node }) => (
					<PreviewTours key={node.id} node={node} backPath={backPath} />
				))}
			</div>
			{hasHiddenElements && <button onClick={handleClick}>ЕЩЕ!</button>}
		</>
	)
}

const Combine = ({ directionPath, backPath, categoryPath, guidePath }) => {
	const tours = useAllTours()

	const filteredTours = tours.filter(({ node: { directions, categories, guide } }) => {
		const [, ...secondary] = directions.map(({ path }) => path)
		const pathCategories = categories.map(({ path }) => path)

		const categoryIncludes = categoryPath ? pathCategories.includes(categoryPath) : true
		const guideIncludes = guidePath ? guide.path === guidePath : true

		return secondary.includes(directionPath) && categoryIncludes && guideIncludes
	})

	return (
		<>
			{filteredTours.length && directionPath ? (
				<div>
					<h2>Другие туры</h2>
					<ChunkOutput array={filteredTours} backPath={backPath} />
				</div>
			) : null}
		</>
	)
}

export default Combine
