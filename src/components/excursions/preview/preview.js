import React from 'react'
import './preview.css'
import PreviewImage from './image'
import Link from '../../global/link'

const PreviewExcursions = ({ node }) => {
	return (
		<div className="expreview__block">
			<PreviewImage direction={node.direction.path} path={node.path} />
			<div className="expreview__block-center">
				<div className="expreview__block-center-row name">{node.name}</div>
				<div className="expreview__block-center-row">
					<div className="expreview__block-center-row-element">
						{node.hours} часа
					</div>
					<div className="expreview__block-center-row-element">
						{node.transports.map((transport) => (
							<img
								src={transport.icon.publicURL}
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
			>
				ПОДРОБНЕЕ
			</Link>
		</div>
	)
}

export default PreviewExcursions
