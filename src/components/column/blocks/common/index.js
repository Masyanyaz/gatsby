import React from 'react'

import './index.css'

import GlobalUISpoiler from '../../../global/UI/spoiler'

const ColumnBlocksCommon = () => {
	return (
		<div className="common">
			<p>autres services</p>
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
