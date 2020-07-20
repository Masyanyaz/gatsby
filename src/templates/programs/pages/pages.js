import React from 'react'
import { graphql } from 'gatsby'

import './pages.css'

import GeneralDays from '../../../general/days'
import GeneralPrices from '../../../general/prices/programs'
import GeneralOverall from '../../../general/overall'
import LayoutsPages from '../../../layouts/pages'
import ColumnBlocksInfo from '../../../components/column/blocks/info'
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

const ToursPage = (props) => {
	const data = props.data.strapiTours
	const pricesArray = data.prices.reduce((res, price) => {
		const prices = price.count.map(({ value }) => value)
		return [...res, ...prices]
	}, [])

	const columnBlocksInfo = () => (
		<ColumnBlocksInfo
			prices={pricesArray}
			days={data.days}
			towns={data.towns}
			priceType={data.priceType}
			groupCount={data.groupCount}
		/>
	)
	const locationState = props.location.state
	console.log(data)
	return (
		<LayoutsPages columnBlocksInfo={columnBlocksInfo}>
			<div className="programm__img">
				<img
					src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg"
					alt=""
				/>
			</div>
			<div>
				<Link
					to={locationState && locationState.back ? locationState.back : `/${data.direction.path}`}
				>
					Back
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
				<GeneralOverall icons={data.icons} />
			</div>

			{/*<div className="programm__menu">*/}
			{/*	<div className="programm__menu-item">Программа</div>*/}
			{/*	<div className="programm__menu-item">Цена и условия</div>*/}
			{/*	<div className="programm__menu-item">Дополнительная информация</div>*/}
			{/*</div>*/}
			{Boolean(data.days.length) && <GeneralDays days={data.days} />}
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
			...toursIcons
			...toursPriceType
			groupCount
		}
	}
`

export default ToursPage
