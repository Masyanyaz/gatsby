import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import './global.css'
import './default.css'

import { changeDirection, changeService } from '../store/url/actions'

import Header from '../components/header/header'
import ColumnFilters from '../components/column/filters'
import Footer from '../components/footer/footer'
import FormsPopup from '../components/forms/popup'

const LayoutsFilters = ({ children, direction, service }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(changeDirection(direction))
		dispatch(changeService(service))
	}, [dispatch, service, direction])

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
