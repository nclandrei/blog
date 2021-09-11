require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Andrei's Blog`,
    name: `Andrei Nicolae`,
    siteUrl: `https://anicolae.ro`,
    description: `Andrei's software development blog.`,

    hero: {
      heading: `Perspectives on technology, design and business from the team at Narative.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/amnicolae`,
      },
      {
        name: `github`,
        url: `https://github.com/nclandrei`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        sources: {
          local: true,
          contentful: false,
        }
      }
    }
  ]
};
