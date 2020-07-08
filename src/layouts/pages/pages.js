import React from 'react'
import PropTypes from 'prop-types'

import '../global.css'
import '../default.css'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import PopupForm from '../../components/forms/popup/popup'
import DirectionBlock from '../../components/column/direction/direction'
import CommonBlock from '../../components/column/common/common'
import AdvantBlock from '../../components/column/advant/advant'
import { useSelector } from 'react-redux'

const PagesLayout = ({ children, directionName }) => {
	const service = useSelector((state) => state.url.service)

	return (
		<>
			<Header />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
				<div className="right-column">
					{service === 'excursion' ? (
						<div>exursions</div>
					) : (
						<DirectionBlock directionName={directionName} />
					)}
					<CommonBlock />
					<AdvantBlock />
				</div>
				<PopupForm />
			</div>
			<Footer />
		</>
	)
}

PagesLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default PagesLayout
