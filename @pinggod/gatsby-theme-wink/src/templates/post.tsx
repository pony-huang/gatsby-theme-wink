import React from "react";
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Wink } from "../../typings";
import { Layout } from "../components/layout";
import { PostCard } from "../components/post-card";
import { PostList } from "../components/post-list";
import * as S from "./post.style";

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
                <PostCard post={post.node} />
                <S.MDXWrapper>
                    <MDXRenderer title={post.node.frontmatter.title}>
                        {post.node.body}
                    </MDXRenderer>
                </S.MDXWrapper>
                <PostList posts={siblingPosts} />
            </>
        </Layout>
    );
};

export default Post;
