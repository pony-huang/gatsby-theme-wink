module.exports = ({
    blogPath = "content/posts",
    mdxExtensions = [".mdx", ".md"],
    ga = ""
}) => ({
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: blogPath
            }
        },
        // {
        //     resolve: `gatsby-plugin-page-creator`,
        //     options: {
        //         path: `${__dirname}/src/pages`
        //     }
        // },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: mdxExtensions
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: ga
            }
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-accessibilityjs`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`
    ]
});
