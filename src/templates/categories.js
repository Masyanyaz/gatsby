// import React from "react"
// import { Link, graphql } from "gatsby"
//
// import Layout from "../layouts/default/layout"
// import SEO from "../components/seo"
//
//
// const IndexPage = (props) => {
//
//   const data = props.data.strapiCategories
//
//   return (
//     <Layout>
//       <SEO
//         title={ data.meta.title }
//         description={data.meta.description}
//       />
//       <h1>{ data.meta.h1 }</h1>
//       <h1>{ data.name }</h1>
//     </Layout>
//   )
// }
//
// export const query = graphql`
//   query IndexPage($pagePath: String!) {
//     strapiCategories(url: {eq: $pagePath}) {
//       id
//       name
//       meta {
//         title
//         h1
//         description
//       }
//     }
//   }
// `
//
// export default IndexPage
