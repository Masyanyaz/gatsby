import React from 'react'
import PropTypes from 'prop-types'

import './global.css'
import './default.css'

import Header from '../components/header'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'
import ColumnFilters from '../components/column/filters'
import GlobalArrowUp from '../components/global/arrowUp'

const LayoutsFilters = ({ children, columnContext }) => {
	return (
		<>
			<Header />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
				<ColumnFilters columnContext={columnContext} />
			</div>
			<Footer />
			<FormsPopup />
			<GlobalArrowUp />
		</>
	)
}

LayoutsFilters.propTypes = {
	children: PropTypes.node.isRequired,
	columnContext: PropTypes.object,
}

export default LayoutsFilters
