import React from "react"

import DefaultLayout from "../layouts/default/default"
import SEO from "../components/global/seo"

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DefaultLayout>
)

export default NotFoundPage
