const mdxPlugins = [
    `gatsby-remark-slug`,
    {
        resolve: `gatsby-remark-images`,
        options: {
            maxWidth: 1200,
            backgroundColor: `white`,
            withWebp: true,
            showCaptions: true,
            quality: 80,
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
                // remarkPlugins: [
                //     require('remark-math'),
                // ],
                // rehypePlugins: [
                //     require('rehype-katex'),
                //     require('rehype-slug'),
                //     require('@agentofuser/rehype-section'),
                // ],
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
