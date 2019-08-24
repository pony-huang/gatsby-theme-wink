module.exports = {
  siteMetadata: {
    title: `rexlnt.com`,
    siteUrl: `https://www.rxlnt.com`,
    description: `Zeno Sun's Personal Blog`
  },
  plugins: [
    {
      resolve: `@pinggod/gatsby-theme-wink`,
      options: {
        blogPath: "content/posts",
        mdxExtensions: [".mdx", ".md"],
        ga: "UA-137858782-1"
      }
    }
  ]
};
