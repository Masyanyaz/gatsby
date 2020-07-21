import React from 'react'
import Img from 'gatsby-image'

const GeneralOverall = ({ icons }) => {
	return (
		<>
			<h2>Тур одним взглядом</h2>
			<div className="programm__info-tags">
				{icons.map(({ id, name, image }) => (
					<div key={id} className="programm__info-tags-item">
						<Img fixed={image.childImageSharp.fixed} />
						<p>{name}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default GeneralOverall
