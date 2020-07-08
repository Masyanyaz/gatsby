import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import '../global.css'
import '../default.css'

import { changeDirection, changeService } from '../../store/url/actions'

import Header from '../../components/header/header'
import RightColumn from '../../components/column/column'
import Footer from '../../components/footer/footer'
import PopupForm from '../../components/forms/popup/popup'

const FiltersLayout = ({ children, direction, service }) => {
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
				<RightColumn />
				<PopupForm />
			</div>
			<Footer />
		</>
	)
}

FiltersLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default FiltersLayout
