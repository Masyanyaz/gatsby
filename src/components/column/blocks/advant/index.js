import React from 'react'

import './index.css'

const ColumnBlocksAdvant = () => {
	return (
		<div className="advant">
			<p>nos avantages</p>
			<div className="advant__grid">
				<div className="advant__grid-element">
					<div className="advant__grid-element-icon" />
					<p>prix justes</p>
				</div>
				<div className="advant__grid-element">
					<div className="advant__grid-element-icon" />
					<p>paiements sécurisés</p>
				</div>
				<div className="advant__grid-element">
					<div className="advant__grid-element-icon" />
					<p>tour-operateur officiel</p>
				</div>
				<div className="advant__grid-element">
					<div className="advant__grid-element-icon" />
					<p>plus de 10 ans d'experiance</p>
				</div>
			</div>
		</div>
	)
}

export default ColumnBlocksAdvant
