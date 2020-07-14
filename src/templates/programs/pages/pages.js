import React from 'react'
import { graphql } from 'gatsby'

import './pages.css'

import GeneralDays from '../../../general/days'
import GeneralPrices from '../../../general/prices/programs'
import LayoutsPages from '../../../layouts/pages'
import ColumnBlocksInfo from '../../../components/column/blocks/info'
import GlobalUITag from '../../../components/global/UI/tag'

const TagList = ({ direction, category, seasons }) => {
	return (
		<div className="tag-list">
			<GlobalUITag to={`/${direction.path}`} text={direction.name} />
			<GlobalUITag
				to={`/catalogue/filters/tours/all/${category.path}/all/all`}
				text={category.name}
			/>
			<GlobalUITag
				to={`/catalogue/filters/tours/all/all/${
					seasons.length !== 1 ? 'all' : seasons[0].path
				}/all`}
				text={seasons.length !== 1 ? 'Круглый год' : seasons[0].name}
			/>
		</div>
	)
}

const ToursPage = (props) => {
	const data = props.data.strapiTours
	const pricesArray = data.prices.reduce((res, price) => {
		const prices = price.types.map((type) => type.value)
		return [...res, ...prices]
	}, [])

	const componentInfo = () => (
		<ColumnBlocksInfo prices={pricesArray} days={data.days} towns={data.towns} />
	)
	return (
		<LayoutsPages componentInfo={componentInfo}>
			<div className="programm__img">
				<img
					src="https://21foto.ru/wp-content/uploads/2015/11/20120519-IMGP0657-06-Panorama-scaled.jpg"
					alt=""
				/>
			</div>
			<h2>{data.name}</h2>
			<div className="programm__info">
				<TagList direction={data.direction} category={data.category} seasons={data.seasons} />
				<div className="programm__info-description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aut repudiandae eaque
					provident quis excepturi sunt enim dolore debitis molestiae!
				</div>
				<div className="otstup"></div>
				<p>Сделаем вид, что это заготовка для тура одним взглядом</p>
				<div className="programm__info-tags">
					{data.types.map((type) => (
						<div key={type.id} className="programm__info-tags-item">
							<img src={type.img.publicURL} alt="" />
							<span>{type.name}</span>
						</div>
					))}
				</div>
			</div>

			<div className="programm__menu">
				<div className="programm__menu-item">Программа</div>
				<div className="programm__menu-item">Цена и условия</div>
				<div className="programm__menu-item">Дополнительная информация</div>
			</div>
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
			name
			days {
				id
				name
				text
				picture {
					publicURL
				}
			}
			direction {
				name
				path
			}
			category {
				name
				path
			}
			seasons {
				name
				path
			}
			types {
				id
				img {
					publicURL
				}
				name
			}
			prices {
				id
				count
				types {
					id
					name
					value
				}
			}
			towns {
				name
				id
			}
			groupCount
			priceType
		}
	}
`

export default ToursPage
