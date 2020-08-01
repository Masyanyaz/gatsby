import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

import Link from '../../../global/link'

const ColumnBlocksDirectionPrograms = ({ direction, directionPath }) => {
	return (
		<div>
			{direction?.excursions.length > 0 && directionPath && (
				<div className="direction">
					<p>aussi à {direction.name}</p>
					<div className="direction__element">
						<div className="direction__element-icon" />
						<p>
							<Link to={`/catalogue/filters/excursion/${directionPath || 'all'}/all`}>
								Excursions
							</Link>
						</p>
					</div>
					{/*<div className="direction__element">
						<div className="direction__element-icon" />
						<p>Billets de théâtre</p>
					</div>*/}
				</div>
			)}
		</div>
	)
}

ColumnBlocksDirectionPrograms.defaulProps = {
	direction: null,
	directionPath: null,
}

ColumnBlocksDirectionPrograms.propTypes = {
	direction: PropTypes.object,
	directionPath: PropTypes.string,
}

export default ColumnBlocksDirectionPrograms
