import React from 'react'
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
						{node.transports.map((transport) => (
							<img
								src={transport.image.publicURL}
								alt=""
								title={transport.name}
								key={transport.id}
							/>
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

export default PreviewExcursions
