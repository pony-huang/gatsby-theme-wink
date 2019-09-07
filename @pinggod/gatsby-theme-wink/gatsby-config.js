const mdxPlugins = [
    `gatsby-remark-slug`,
    {
        resolve: `gatsby-remark-images`,
        options: {
            maxWidth: 1200,
            linkImagesToOriginal: false,
            quality: 80,
            withWebp: true,
        },
    },
    {
        resolve: `gatsby-remark-prismjs`,
        options: {
            aliases: {
                sh: "shell",
                env: "bash",
                mdx: "md",
            },
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
        `gatsby-transformer-remark`,
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
