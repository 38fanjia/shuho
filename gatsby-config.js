/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/shuho',
  /* Your site config here */
  siteMetadata: {
    siteTitle: 'shuho',
    siteDescription: 'fanjia38 中文的周记。我的中文不好，たまに日本語。',
    siteUrl: 'https://fanjia38.github.io/shuho/',
    author: 'fanjia38',
    mainColor: '#00aa8c'
  },
  /* plugins */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/posts/`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        icon: 'image/favicon.ico'
      }
    }
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript'
  ]
}
