import React from 'react'
import { Link, graphql } from 'gatsby'

import DefaultLayout from '../layouts/default/default'
import SEO from '../components/global/seo'

const IndexPage = (props) => (
	<DefaultLayout>
		<SEO title="Home" />
		{props.data.allSitePage.edges.map((edge) => (
			<Link key={edge.node.id} to={edge.node.path} style={{ display: 'block' }}>
				{edge.node.id}
			</Link>
		))}
	</DefaultLayout>
)

export const query = graphql`
	query {
		allSitePage {
			edges {
				node {
					id
					path
				}
			}
		}
	}
`

export default IndexPage
