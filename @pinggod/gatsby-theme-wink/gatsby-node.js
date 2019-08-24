// eslint-disable-next-line
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        createNodeField({
            node,
            name: `slug`,
            value: createFilePath({ node, getNode })
        });
    }
};

// import { gql } from 'apollo-boost'

// export default gql`
//   query Pokemons($first: Int!) {
//     pokemons(first: $first) {
//       id
//       number
//       name
//     }
//   }
// `

exports.createPages = async ({ graphql, actions }) => {
    const { errors, data } = await graphql(`
        {
            allMdx {
                totalCount
                posts: edges {
                    node {
                        id
                        body
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (errors) {
        throw errors;
    }

    const { createPage } = actions;
    const { posts } = data.allMdx;
    const postTemplate = require.resolve("./src/templates/post.tsx");

    posts.forEach(post => {
        createPage({
            path: post.node.fields.slug,
            component: postTemplate,
            context: {
                id: post.node.id,
                post: post
            }
        });
    });
};
