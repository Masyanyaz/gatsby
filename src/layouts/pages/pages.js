import React from 'react'
import PropTypes from 'prop-types'

import '../global.css'
import '../default.css'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import PopupForm from '../../components/forms/popup/popup'
import ExcursionInfo from '../../components/column/excursion_info/excursion_info'
import { useSelector } from 'react-redux'
import ButtonOpenPopupForm from '../../components/forms/popup/buttonOpenPopupForm'
import ColumnPrice from '../../components/column/price/price'
import ColumnReview from "../../components/column/review/review";
import TourInfo from '../../components/column/tour_info/tour_info'

const PagesLayout = ({ children, directionName }) => {
	const service = useSelector((state) => state.url.service)

	return (
		<>
			<Header />
			<div className="content">
				<div className="main-content">
					<main>{children}</main>
				</div>
				<div className="right-column fixed">
					{service === 'excursion'
						?
						( <ExcursionInfo/> )
						:
						( <TourInfo/> )
					}
					<ColumnPrice/>
					<ButtonOpenPopupForm text="Слыш, купи" className="column__button" />
					<ColumnReview/>
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
