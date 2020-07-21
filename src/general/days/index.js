import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'nuka-carousel'
import Img from 'gatsby-image'

import './index.css'

import GeneralDaysDots from './dots'

const GeneralDays = ({ days }) => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const daysLength = days.length
	const isLastDay = currentSlide === days.length - 1
	const countHiddenSlides = daysLength - 6 < 0 ? 0 : daysLength - 6

	const next = () => {
		setCurrentSlide((currentSlide) => (isLastDay ? daysLength - 1 : currentSlide + 1))
	}
	const prev = () => {
		setCurrentSlide((currentSlide) => (!currentSlide ? 0 : currentSlide - 1))
	}

	const updateCurrentSlide = (index) => {
		if (currentSlide !== index) {
			setCurrentSlide(index)
		}
	}

	return (
		<>
			{daysLength > 0 && (
				<div>
					<Carousel
						className="days-carousel"
						enableKeyboardControls
						initialSlideHeight={500}
						slidesToShow={1}
						slideIndex={currentSlide}
						afterSlide={updateCurrentSlide}
						renderAnnounceSlideMessage={({ currentSlide, slideCount }) =>
							`Slide ${currentSlide + 1} of ${slideCount}`
						}
						withoutControls
					>
						{days.map(({ id, name, text, image }, i) => (
							<div key={id} className="programm__days">
								<div className="programm__days-left">
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											width: '50%',
											margin: '0 auto',
										}}
										className="programm__days-left-count"
									>
										<button disabled={!currentSlide} onClick={prev}>
											-
										</button>
										<span>День {i + 1}</span> из {days.length}
										<button disabled={isLastDay} onClick={next}>
											+
										</button>
									</div>
									<div className="programm__days-left-name">{name}</div>
									<div className="programm__days-left-description">{text}</div>
								</div>
								<div className="programm__days-right">
									<Img fluid={image.childImageSharp.fluid} />
								</div>
							</div>
						))}
					</Carousel>

					<GeneralDaysDots
						days={days}
						updateCurrentSlide={updateCurrentSlide}
						currentSlide={currentSlide}
						isLastDay={isLastDay}
						next={next}
						prev={prev}
						countHiddenSlides={countHiddenSlides}
					/>
				</div>
			)}
		</>
	)
}

GeneralDays.propTypes = {
	days: PropTypes.array.isRequired,
}

export default GeneralDays
