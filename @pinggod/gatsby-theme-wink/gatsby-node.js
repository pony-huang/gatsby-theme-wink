/* eslint-disable */
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const queryAllPosts = `
    fragment Cover on File {
        childImageSharp {
            fluid(maxWidth: 1200) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
            }
        }
    }

    fragment NodeOverview on Mdx {
        id
        fields {
            slug
        }
        frontmatter {
            title
            date
            description
            coverAuthor
            coverOriginalUrl
            cover {
            ...Cover
            }
        }
        timeToRead
        wordCount {
            paragraphs
            sentences
            words
        }
    }

    {
        site {
            siteMetadata {
            title
            description
            siteUrl
            }
            buildTime
        }
        allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}}}) {
            totalCount
            edges {
            previous {
                ...NodeOverview
            }
            node {
                ...NodeOverview
                internal {
                type
                contentDigest
                }
                tableOfContents
                body
            }
            next {
                ...NodeOverview
            }
            }
        }
    }
`;

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        createNodeField({
            node,
            name: `slug`,
            value: path.join(`/post`, createFilePath({ node, getNode })),
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { data, errors } = await graphql(queryAllPosts);
    const { createPage } = actions;
    const pageTemplate = require.resolve("./src/templates/page.tsx");
    const postTemplate = require.resolve("./src/templates/post.tsx");
    const { site, allMdx } = data;
    const { totalCount, edges } = allMdx;
    const pageSize = 6;

    if (errors) {
        console.info('Errors: \n', JSON.stringify(errors, 0, 4));
        throw new Error("Theme Query Data Error");
    }
    if (edges.length <= 0) {
        throw new Error("Must Have at least one");
    }

    // page
    for (let pageNo = 1; pageNo <= Math.ceil(totalCount / pageSize); pageNo++) {
        const endPosition = pageNo * pageSize;
        const startPosition = endPosition - pageSize;

        createPage({
            path: pageNo === 1 ? `/` : `/page/${pageNo}`,
            component: pageTemplate,
            context: {
                prevPath: pageNo === 1 ? null : `/page/${pageNo - 1}`,
                nextPath: endPosition >= totalCount ? null : `/page/${pageNo + 1}`,
                data: {
                    site,
                    allMdx: {
                        totalCount,
                        edges: edges.slice(startPosition, endPosition),
                    },
                }
            }
        });
    }

    // post
    allMdx.edges.forEach((post) => {
        createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
                site,
                post,
                totalCount: allMdx.totalCount,
            }
        });
    });
};
