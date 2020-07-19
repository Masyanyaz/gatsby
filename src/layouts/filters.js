import React from 'react'
import PropTypes from 'prop-types'

import './global.css'
import './default.css'

import Header from '../components/header'
import ColumnFilters from '../components/column/filters'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'

const LayoutsFilters = ({ children }) => {
	return (
		<>
			<Header />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
				<ColumnFilters />
				<FormsPopup />
			</div>
			<Footer />
		</>
	)
}

LayoutsFilters.propTypes = {
	children: PropTypes.node.isRequired,
}

export default LayoutsFilters
