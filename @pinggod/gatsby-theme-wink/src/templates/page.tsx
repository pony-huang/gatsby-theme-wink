import React from "react";
import { Wink } from "../../typings";
import { Layout } from "../components/layout";
import { PostList } from "../components/post-list";
import { Pagination } from "../components/pagination";

interface Context extends Wink.RootTypes {
    prevPath?: string;
    nextPath?: string;
}

interface Props {
    pageContext: Context;
}

const Page = (props: Props): React.ReactElement => {
    const { data, prevPath, nextPath } = props.pageContext;
    // const
    const posts = data.allMdx.edges.map((item): Wink.NodeDetail => item.node);

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
};

export default Page;
