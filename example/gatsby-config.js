module.exports = {
  siteMetadata: {
    title: `REXLNT`,
    siteUrl: `https://www.rxlnt.com`,
    description: `Zeno Sun's Personal Blog`,
    author: `Zeno Sun`,
    authorURL: `https://www.rxlnt.com`,
    socials: [
      {
        icon: 'github',
        name: 'GitHub',
        url: 'https://github.com/pinggod',
      },
      {
        icon: 'twitter',
        name: 'Twitter',
        url: 'https://twitter.com/ping4god',
      },
      {
        icon: 'weibo',
        name: 'Wibo',
        url: 'https://weibo.com/2827844063',
      },
      {
        icon: 'wechat',
        name: 'Wechat',
        url: '',
      },
    ]
  },
  plugins: [
    {
      resolve: `@pinggod/gatsby-theme-wink`,
      options: {
        postPath: "content/posts",
        mdxExtensions: [".mdx", ".md"],
        ga: "UA-137858782-1",
        htmlLang: "zh",
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
