import React from 'react'

const GeneralOverall = ({ icons }) => {
	return (
		<>
			<h2>Тур одним взглядом</h2>
			<div className="programm__info-tags">
				{icons.map((icon) => (
					<div key={icon.id} className="programm__info-tags-item">
						<img src={icon.image.publicURL} alt="" />
						<p>{icon.name}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default GeneralOverall
