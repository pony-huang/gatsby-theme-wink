import { createFilePath } from "gatsby-source-filesystem";

export const onCreateNode = ({ node, actions, getNode }): void => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        createNodeField({
            node,
            name: `slug`,
            value: createFilePath({ node, getNode })
        });
    }
};
