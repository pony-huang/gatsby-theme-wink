import React from "react";
import { Layout } from "../components/layout";
import { PostHead } from "../components/post-head";
import { PostList } from "../components/post-list";
import { MDX } from "../components/mdx";

interface Props {
    pageContext: {
        site: Wink.Site;
        post: Wink.Edge;
        totalCount: number;
    };
}

const Post = (props: Props): React.ReactElement => {
    const { site, post } = props.pageContext;
    const siblingPosts = [];

    post.previous && siblingPosts.push(post.previous);
    post.next && siblingPosts.push(post.next);

    return (
        <Layout
            title={`${post.node.frontmatter.title} · ${site.siteMetadata.title}`}
            description={post.node.frontmatter.description || site.siteMetadata.description}>
            <>
                <PostHead frontmatter={post.node.frontmatter} />
                <MDX post={post.node} />
                <PostList posts={siblingPosts} />
            </>
        </Layout>
    );
};

export default Post;
