import React from 'react'

import LayoutsDefault from '../layouts/default'
import SEO from '../components/global/seo'

const NotFoundPage = () => (
	<LayoutsDefault>
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</LayoutsDefault>
)

export default NotFoundPage
