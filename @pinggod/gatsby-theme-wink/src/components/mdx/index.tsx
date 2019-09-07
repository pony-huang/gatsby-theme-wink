import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as S from "./index.style";

interface Props {
    post: Wink.NodeDetail;
}

export const MDX = (props: Props): React.ReactElement => {
    const { post } = props;
    const components = {
        wrapper: S.Wrapper,
    }

    return (
        <MDXProvider components={components}>
            <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
    );
};
