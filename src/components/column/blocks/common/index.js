import React, { useState } from 'react'

import './index.css'

const ColumnBlocksCommon = () => {
	const [open, setOpen] = useState(false)
	const openContent = () => {
		setOpen(true)
	}

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
			{!open ? (
				<button className="common__more button-reset" onClick={openContent}>
					encore
				</button>
			) : (
				<div className="common__element">
					<div className="common__element-icon" />
					<p>Transferts</p>
				</div>
			)}
		</div>
	)
}

export default ColumnBlocksCommon
