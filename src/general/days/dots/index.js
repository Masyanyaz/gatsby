import React, { useState } from 'react'
import Carousel from 'nuka-carousel'

import './index.css'

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
					<div
						key={index}
						className={`dots-item ${currentSlide === index ? 'active' : null}`}
						aria-label={`Selected: ${index + 1} slide`}
						title={`Selected: ${index + 1} slide`}
						role="button"
						tabIndex={0}
						onClick={() => updateCurrentSlide(index)}
					>
						<div className="dots-ball" />
						<span className="dots-item-name">Giorno {index + 1}</span>
					</div>
				))}
			</Carousel>
			<button disabled={isLastDay} onClick={next}>
				+
			</button>
		</div>
	)
}

export default GeneralDaysDots
