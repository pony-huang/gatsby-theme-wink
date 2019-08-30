import React from "react";
import { Wink } from "../../typings";
import Layout from "../components/layout";
import { PostList } from "../components/post-list";
import { InnerLink } from "../components/link";

interface Context extends Wink.RootTypes {
    prevPath?: string;
    nextPath?: string;
}

interface Props {
    pageContext: Context;
}

const Page = (props: Props): React.ReactElement => {
    const { data, prevPath, nextPath } = props.pageContext;
    const prevNode = prevPath ? <InnerLink to={prevPath}>PREV</InnerLink> : null;
    const nextNode = nextPath ? <InnerLink to={nextPath}>NEXT</InnerLink> : null;

    return (
        <Layout
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}>
            <>
                <PostList data={data} />
                <div style={{ textAlign: 'center' }}>
                    {prevNode}
                    {nextNode}
                </div>
            </>
        </Layout>
    );
};

export default Page;
