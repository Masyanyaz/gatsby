import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const PreviewTypes = ({ types }) => {
	const { strapiTypes } = useStaticQuery(graphql`
		query {
			strapiTypes(strapiId: { eq: 9 }) {
				name
				id
				path
				img {
					publicURL
				}
			}
		}
	`)

	types.length = Math.min(types.length, 2)

	return (
		<>
			{[...types, strapiTypes].map(({ id, img, name }) => (
				<div key={id}>
					<img src={img.publicURL} title={name} alt="" />
				</div>
			))}
		</>
	)
}

export default PreviewTypes
