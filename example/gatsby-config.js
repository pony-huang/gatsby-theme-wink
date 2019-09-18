module.exports = {
  siteMetadata: {
    title: `REXLNT`,
    siteUrl: `https://www.rxlnt.com`,
    description: `Zeno Sun's Personal Blog`,
    author: `Zeno Sun`,
    authorURL: `https://www.rxlnt.com`,
  },
  plugins: [
    {
      resolve: `@pinggod/gatsby-theme-wink`,
      options: {
        postPath: "content/posts",
        mdxExtensions: [".mdx", ".md"],
        ga: "UA-137858782-1",
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'REXLNT',
        short_name: 'REXLNT',
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: "static/favicon.png",
      },
    },
  ]
};
