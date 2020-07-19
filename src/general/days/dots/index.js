import React from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'

import './index.css'

import GlobalUIButton from '../../../components/global/UI/button'

const GeneralDaysDots = ({
	days,
	isLastDay,
	updateCurrentSlide,
	currentSlide,
	next,
	prev,
	countHiddenSlides,
}) => {
	return (
		<div className="dots">
			<button disabled={!currentSlide} onClick={prev}>
				-
			</button>
			<Carousel
				enableKeyboardControls
				initialSlideHeight={100}
				slidesToShow={6}
				renderAnnounceSlideMessage={({ currentSlide, slideCount }) =>
					`Slide ${currentSlide + 1} of ${slideCount}`
				}
				slideIndex={currentSlide < countHiddenSlides ? currentSlide : countHiddenSlides}
				withoutControls
			>
				{days.map((day, index) => (
					<GlobalUIButton
						key={index}
						className={`dots-item ${currentSlide === index ? 'active' : ''}`}
						aria-label={`Selected: ${index + 1} slide`}
						title={`Selected: ${index + 1} slide`}
						onClick={() => updateCurrentSlide(index)}
					>
						<div className="dots-ball" />
						<span className="dots-item-name">Jour {index + 1}</span>
					</GlobalUIButton>
				))}
			</Carousel>
			<button disabled={isLastDay} onClick={next}>
				+
			</button>
		</div>
	)
}

GeneralDaysDots.propTypes = {
	days: PropTypes.array.isRequired,
	isLastDay: PropTypes.bool.isRequired,
	updateCurrentSlide: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
	prev: PropTypes.func.isRequired,
	countHiddenSlides: PropTypes.number.isRequired,
}

export default GeneralDaysDots
