import { FluidObject } from 'gatsby-image';

declare module 'gatsby-plugin-mdx';

declare namespace Rexlnt {
    interface Site {
        siteMetadata: {
            title: string;
            description: string;
        };
    }

    interface Post {
        id: string;
        frontmatter: {
            title: string;
            date: string;
            categories: string;
            keywords: string;
            description: string;
            cover: {
                childImageSharp: {
                    fluid: FluidObject;
                };
            };
        };
        fields: {
            slug: string;
        };
        body: string;
    }

    interface AllPost {
        totalCount: number;
        posts: {
            post: Post;
        }[];
    }
}
