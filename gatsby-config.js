module.exports = {
  siteMetadata: {
    title: 'The Best Motherfucking Website',
    description: 'Your motherfucking websites got nothing compared to this beauty.',
    author: {
      name: 'Resi Respati',
      url: 'https://twitter.com/resir014',
      email: 'resir014@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: `https://thebestmotherfuckingwebsite.co`
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet'
  ]
}