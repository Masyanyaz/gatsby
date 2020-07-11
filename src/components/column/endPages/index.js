import React from 'react'
import PropTypes from 'prop-types'

import '../column.css'
import styles from './index.module.css'

import FormsPopupButton from '../../forms/popup/button'
import ColumnBlocksReview from '../blocks/review'

const ColumnEndPages = ({ componentInfo }) => {
	return (
		<div className="right-column-container">
			<div className={`right-column ${styles.sticky}`}>
				{componentInfo()}
				<FormsPopupButton text="Слыш, купи" className={styles.button} />
				<ColumnBlocksReview />
			</div>
		</div>
	)
}

ColumnEndPages.propTypes = {
	componentInfo: PropTypes.func.isRequired,
}

export default ColumnEndPages
