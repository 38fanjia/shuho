/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/shuho',
  /* Your site config here */
  siteMetadata: {
    title: 'shuho',
    description: 'fanjia38 中文的周记。我的中文不好，たまに日本語。',
    url: 'https://fanjia38.github.io/shuho/',
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
        icon: 'static/image/favicon.png'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    }
  ]
}
