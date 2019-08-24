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

export const createPages = async ({ graphql, actions }): Promise<void> => {
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
    const postTemplate = require.resolve("../../src/templates/post.tsx");

    posts.forEach((post: any): void => {
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
