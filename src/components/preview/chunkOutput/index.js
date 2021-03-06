import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

import GlobalUIButton from '../../global/UI/button'

const PreviewChunkOutput = ({
	array,
	backPath,
	component: Component,
	chunkSize,
	buttonText,
	...other
}) => {
	const [chunkIndex, setChunkIndex] = useState(1)
	const [isVisible, setIsVisible] = useState(true)
	const visibleElements = chunkIndex * chunkSize
	const hasHiddenElements = visibleElements <= array.length - 1

	const handleClick = () => {
		if (hasHiddenElements) {
			setIsVisible(false)
			setChunkIndex((chunkIndex) => chunkIndex + 1)
		}
	}

	useEffect(() => {
		setIsVisible(true)
	}, [isVisible])

	return (
		<>
			<div className="preview__grid">
				{array.slice(0, visibleElements).map(({ node }) => (
					<Component key={node.id} node={node} backPath={backPath} {...other} />
				))}
			</div>
			{isVisible && hasHiddenElements && (
				<GlobalUIButton className={styles.button} onClick={handleClick}>
					{buttonText}
				</GlobalUIButton>
			)}
		</>
	)
}

PreviewChunkOutput.defaultProps = {
	chunkSize: 5,
	buttonText: 'Показать еще',
}

PreviewChunkOutput.propTypes = {
	array: PropTypes.array.isRequired,
	backPath: PropTypes.string.isRequired,
	buttonText: PropTypes.string,
	component: PropTypes.func.isRequired,
	chunkSize: PropTypes.number,
}

export default PreviewChunkOutput
