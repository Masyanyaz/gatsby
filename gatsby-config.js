module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://116.203.228.93:1337",
        // apiURL: "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "categories",
          "tours",
          "types",
          "directions",
        ],
        queryLimit: 1000,
      },
    },
    /*{
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `gatsby`,
        collection: [`cities`],
        server: {
          address: 'gatsby-shard-00-01-hdvma.mongodb.net',
          port: 27017
        },
        auth: {
          user: 'Masyanyaz',
          password: '1996zydfhm11'
        },
        extraParams: {
          replicaSet: 'gatsby-shard-0',
          ssl: true,
          authSource: `admin`,
          retryWrites: true
        }
      },
    },*/
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}