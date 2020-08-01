import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import GlobalUISpoiler from '../../../global/UI/spoiler'

const ColumnBlocksCommon = ({ direction, directionPath, service }) => {
	const title =
		((service === 'TOURS' && direction?.excursions.length > 0) ||
			(service === 'EXCURSIONS' && direction?.tours.length > 0)) &&
		directionPath
			? 'autres services'
			: 'nos services'

	return (
		<div className="common">
			<p>{title}</p>
			<div className="common__element">
				<div className="common__element-icon" />
				<p>Planification de voyage</p>
			</div>
			<div className="common__element">
				<div className="common__element-icon" />
				<p>Invitations et visa</p>
			</div>
			<div className="common__element">
				<div className="common__element-icon" />
				<p>Billets de train</p>
			</div>
			<GlobalUISpoiler text="encore" className="common__more">
				<div className="common__element">
					<div className="common__element-icon" />
					<p>Transferts</p>
				</div>
			</GlobalUISpoiler>
		</div>
	)
}

ColumnBlocksCommon.defaulProps = {
	direction: null,
	directionPath: null,
}

ColumnBlocksCommon.propTypes = {
	direction: PropTypes.object,
	directionPath: PropTypes.string,
	service: PropTypes.oneOf(['TOURS', 'EXCURSIONS']).isRequired,
}

export default ColumnBlocksCommon
