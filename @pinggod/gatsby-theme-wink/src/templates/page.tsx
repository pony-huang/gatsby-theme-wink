import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";
import { PostList } from "../components/post-list";
import { Pagination } from "../components/pagination";

interface Props {
    data: Wink.PostsData;
    pageContext: {
        ids: string[];
        prevPath: string;
        nextPath: string;
    };
}

export default function Page(props: Props): React.ReactElement {
    const { data } = props;
    const { prevPath, nextPath } = props.pageContext;
    const posts = data.allMdx.edges.map((item): Wink.NodeBase => item.node);

    return (
        <Layout
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}>
            <>
                <PostList posts={posts} />
                <Pagination prevPath={prevPath} nextPath={nextPath} />
            </>
        </Layout>
    );
}

export const query = graphql`
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
            date(formatString: "MMM DD, YYYY")
            description
            coverAuthor
            coverOriginalUrl
            cover {
                ...Cover
            }
        }
        file: parent {
            ... on File {
                modifiedTime(formatString: "MMM DD, YYYY")
                publicURL
                birthTime(formatString: "MMM DD, YYYY")
            }
        }
        timeToRead
        wordCount {
            paragraphs
            sentences
            words
        }
    }

    query posts($ids: [String]) {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
            buildTime
        }
        allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {id: {in: $ids}}) {
            totalCount
            edges {
                node {
                    ...NodeOverview
                }
            }
        }
    }
`;
