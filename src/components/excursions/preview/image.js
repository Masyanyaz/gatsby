import React from 'react'
import Link from '../../global/link'
import MinMaxPriceBlock from '../../programs/pages/prices/minMaxPrice'

const PreviewImage = (props) => {
	return (
		<div className="expreview__block-top">
			<Link to={`/catalogue/programs/${props.direction}/excursion/all/${props.path}`}>
				<img
					src="http://localhost:8000/static/55a73fdb848560ed9d5ef7d11705a792/9dc27/cca7e230b80c337f24ab9c035b2815b9.jpg"
					alt=""
				/>
			</Link>
			<div className="expreview__block-top-price">тут будет цена</div>
		</div>
	)
}

export default PreviewImage
