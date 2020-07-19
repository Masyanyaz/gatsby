import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import PreviewImage from './image'
import Link from '../../global/link'

const PreviewExcursions = ({ node, backPath }) => {
	return (
		<div className="expreview__block">
			<PreviewImage
				directionPath={node.direction.path}
				path={node.path}
				prices={node.prices}
				backPath={backPath}
			/>
			<div className="expreview__block-center">
				<div className="expreview__block-center-row name">{node.name}</div>
				<div className="expreview__block-center-row">
					<div className="expreview__block-center-row-element">{node.hours} часа</div>
					<div className="expreview__block-center-row-element">
						{node.transports.map(({ id, name, image }) => (
							<img key={id} src={image.publicURL} alt="" title={name} />
						))}
					</div>
				</div>
			</div>
			<Link
				to={`/catalogue/programs/${node.direction.path}/excursion/all/${node.path}`}
				className="preview__block-button"
				state={{ back: backPath }}
			>
				ПОДРОБНЕЕ
			</Link>
		</div>
	)
}

PreviewExcursions.propTypes = {
	node: PropTypes.object.isRequired,
	backPath: PropTypes.string.isRequired,
}

export default PreviewExcursions
