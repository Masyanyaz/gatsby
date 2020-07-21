import React from 'react'
import { graphql } from 'gatsby'

import './index.css'

import GeneralDays from '../../../general/days'
import GeneralPrices from '../../../general/prices/programs'
import GeneralOverall from '../../../general/overall'
import LayoutsPages from '../../../layouts/pages'
import GlobalUITag from '../../../components/global/UI/tag'
import Link from '../../../components/global/link'
import EndPagesProgramsProvider from './provider'

const TagList = ({ directions, categories, guide }) => {
	return (
		<div className="tag-list">
			{directions.map(({ id, path, name }) => (
				<GlobalUITag key={id} to={`/${path}`} text={name} />
			))}
			{categories.map(({ id, name, path }) => (
				<GlobalUITag key={id} to={`/catalogue/filters/tours/all/${path}/all/all`} text={name} />
			))}
			<GlobalUITag to={`/catalogue/filters/tours/all/all/${guide.path}/all`} text={guide.name} />
		</div>
	)
}

const ToursPage = (props) => {
	const data = props.data.strapiTours
	const pricesArray = data.prices.reduce((res, price) => {
		const prices = price.count.map(({ value }) => value)
		return [...res, ...prices]
	}, [])

	const locationState = props.location.state

	return (
		<EndPagesProgramsProvider
			days={data.days}
			towns={data.towns}
			prices={pricesArray}
			priceType={data.priceType}
			groupCount={data.groupCount}
		>
			<LayoutsPages>
				<div className="programm__img">
					<img
						src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg"
						alt=""
					/>
				</div>
				<div>
					<Link to={(locationState && locationState.back) || `/${data.directions[0].path}`}>
						Back
					</Link>
				</div>
				<h2>{data.name}</h2>
				<div className="programm__info">
					<TagList directions={data.directions} categories={data.categories} guide={data.guide} />
					<div className="programm__info-description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aut repudiandae eaque
						provident quis excepturi sunt enim dolore debitis molestiae!
					</div>
					<div className="otstup" />
					<GeneralOverall icons={data.icons} />
				</div>

				{/*<div className="programm__menu">*/}
				{/*	<div className="programm__menu-item">Программа</div>*/}
				{/*	<div className="programm__menu-item">Цена и условия</div>*/}
				{/*	<div className="programm__menu-item">Дополнительная информация</div>*/}
				{/*</div>*/}
				<GeneralDays days={data.days} />
				<div className="otstup" />
				<GeneralPrices prices={data.prices} />
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
		</EndPagesProgramsProvider>
	)
}

export const query = graphql`
	query($pagePath: String!) {
		strapiTours(path: { eq: $pagePath }) {
			...toursMain
			...toursDays
			...toursDirections
			...toursCategories
			...toursGuide
			...toursSeason
			...toursPrices
			...toursTowns
			...toursPriceType
			...toursIcons
			groupCount
		}
	}
`

export default ToursPage
