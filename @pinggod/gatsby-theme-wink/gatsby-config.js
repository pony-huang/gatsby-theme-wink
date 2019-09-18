const mdPlugins = [
    require("remark-slug"),
    require("remark-highlight.js"),
];

const mdxPlugins = [
    {
        resolve: `gatsby-remark-images`,
        options: {
            maxWidth: 1200,
            linkImagesToOriginal: false,
            quality: 80,
            withWebp: true,
        },
    },
];

module.exports = ({
    postPath = "content/posts",
    mdxExtensions = [".mdx", ".md"],
    ga = ""
}) => ({
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: postPath,
            }
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: mdxExtensions,
                plugins: mdxPlugins,
                remarkPlugins: mdPlugins,
                gatsbyRemarkPlugins: mdxPlugins,
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: ga
            }
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
    ]
});
