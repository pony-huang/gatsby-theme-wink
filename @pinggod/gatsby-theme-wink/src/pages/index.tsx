import React from "react";
import Layout from "../components/layout";
import PostList from "../components/post-list";

const IndexPage = (): React.ReactElement => (
    <Layout>
        <PostList />
    </Layout>
);

export default IndexPage;
