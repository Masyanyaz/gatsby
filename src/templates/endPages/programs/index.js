import React, { createContext } from 'react'
import { graphql } from 'gatsby'

import './index.css'

import GeneralDays from '../../../general/days'
import GeneralPrices from '../../../general/prices/programs'
import LayoutsPages from '../../../layouts/pages'
import GlobalUITag from '../../../components/global/UI/tag'
import Link from '../../../components/global/link'

const TagList = ({ direction, categories, guide }) => {
	return (
		<div className="tag-list">
			<GlobalUITag to={`/${direction.path}`} text={direction.name} />
			{categories.map((category) => (
				<GlobalUITag
					key={category.id}
					to={`/catalogue/filters/tours/all/${category.path}/all/all`}
					text={category.name}
				/>
			))}
			<GlobalUITag to={`/catalogue/filters/tours/all/all/${guide.path}/all`} text={guide.name} />
		</div>
	)
}

export const TourInfo = createContext(false)

const ToursPage = (props) => {
	const data = props.data.strapiTours
	const pricesArray = data.prices.reduce((res, price) => {
		const prices = price.count.map(({ value }) => value)
		return [...res, ...prices]
	}, [])

	const tourInfoContext = {
		prices: pricesArray,
		days: data.days,
		towns: data.towns,
	}

	const locationState = props.location.state

	return (
		<TourInfo.Provider value={tourInfoContext}>
			<LayoutsPages>
				<div className="programm__img">
					<img
						src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg"
						alt=""
					/>
				</div>
				<div>
					<Link
						to={
							locationState && locationState.back ? locationState.back : `/${data.direction.path}`
						}
					>
						{' '}
						Back{' '}
					</Link>
				</div>
				<h2>{data.name}</h2>
				<div className="programm__info">
					<TagList direction={data.direction} categories={data.categories} guide={data.guide} />
					<div className="programm__info-description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aut repudiandae eaque
						provident quis excepturi sunt enim dolore debitis molestiae!
					</div>
					<div className="otstup" />
					<p>Сделаем вид, что это заготовка для тура одним взглядом</p>
					<div className="programm__info-tags">
						{/*{data.types.map((type) => (*/}{' '}
						{/*	<div key={type.id} className="programm__info-tags-item">*/}{' '}
						{/*		<img src={type.img.publicURL} alt="" />*/} {/*		<span>{type.name}</span>*/}{' '}
						{/*	</div>*/} {/*))}*/}
					</div>
				</div>

				<div className="programm__menu">
					<div className="programm__menu-item">Программа</div>
					<div className="programm__menu-item">Цена и условия</div>
					<div className="programm__menu-item">Дополнительная информация</div>
				</div>
				{data.days.length > 0 && <GeneralDays days={data.days} />}
				<div className="otstup" />
				{data.prices.length ? <GeneralPrices prices={data.prices} /> : <h3>По запросу</h3>}
				<div className="otstup" />
				<h2>Включено в тур</h2>
				<ul>
					<li>Всё</li>
					<li>Всё</li>
					<li>Всё</li>
					<li>Всё</li>
					<li>Всё</li>
				</ul>
				<h2>Не ключено в тур</h2>
				<ul>
					<li>Ничего</li>
					<li>Ничего</li>
					<li>Ничего</li>
					<li>Ничего</li>
					<li>Ничего</li>
				</ul>
			</LayoutsPages>
		</TourInfo.Provider>
	)
}

export const query = graphql`
	query($pagePath: String!) {
		strapiTours(path: { eq: $pagePath }) {
			...toursMain
			...toursDays
			...toursDirection
			...toursCategories
			...toursGuide
			...toursSeason
			...toursPrices
			...toursTowns
			groupCount
		}
	}
`

export default ToursPage
