import React from 'react'
import Link from '../../global/link'
import GeneralPricesMinMax from '../../../general/prices/minMax'

const PreviewImage = ({ directionPath, path, prices }) => {
	const pricesArray = prices.map((price) => price.value)
	return (
		<div className="expreview__block-top">
			<Link to={`/catalogue/programs/${directionPath}/excursion/all/${path}`}>
				<img
					src="http://localhost:8000/static/55a73fdb848560ed9d5ef7d11705a792/9dc27/cca7e230b80c337f24ab9c035b2815b9.jpg"
					alt=""
				/>
			</Link>
			<div className="expreview__block-top-price">
				<GeneralPricesMinMax prices={pricesArray} />
			</div>
		</div>
	)
}

export default PreviewImage
