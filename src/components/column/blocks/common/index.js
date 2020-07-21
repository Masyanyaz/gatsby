import React from 'react'

import './index.css'

import GlobalUISpoiler from '../../../global/UI/spoiler'

const ColumnBlocksCommon = ({ tourFilterInfoContext, excursionFilterInfoContext }) => {
	const title =
		(tourFilterInfoContext &&
			tourFilterInfoContext.direction.excursions.length > 0 &&
			tourFilterInfoContext.directionPath) ||
		(excursionFilterInfoContext &&
			excursionFilterInfoContext.direction.tours.length > 0 &&
			excursionFilterInfoContext.directionPath)
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

export default ColumnBlocksCommon
