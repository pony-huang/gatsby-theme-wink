import React from "react";
import { Wink } from "../../typings";

interface Context extends Wink.RootTypes {
    prevPath?: string;
    nextPath?: string;
}

interface Props {
    pageContext: Context;
}

const Page = (props: Props): React.ReactElement => {
    console.info("props.pageContext.data: ", props.pageContext.data);
    console.info("props.pageContext.prevPath: ", props.pageContext.prevPath);
    console.info("props.pageContext.nextPath: ", props.pageContext.nextPath);

    return <p>HomePage 123</p>;
};

export default Page;

// import React from "react";
// import Layout from "../components/layout";
// import PostList from "../components/post-list";

// const IndexPage = (): React.ReactElement => (
//     <Layout>
//         <PostList />
//     </Layout>
// );

// export default IndexPage;
