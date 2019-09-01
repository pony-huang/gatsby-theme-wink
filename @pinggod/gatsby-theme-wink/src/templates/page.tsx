import React from "react";
import { Wink } from "../../typings";
import Layout from "../components/layout";
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

    return (
        <Layout
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}>
            <>
                <PostList data={data} />
                <Pagination prevPath={prevPath} nextPath={nextPath} />
            </>
        </Layout>
    );
};

export default Page;
