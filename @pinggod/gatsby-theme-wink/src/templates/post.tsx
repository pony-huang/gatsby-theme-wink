import React from "react";
import { Wink } from "../../typings";

interface Props {
    pageContext: {
        site: Wink.Site;
        post: Wink.Edge;
        totalCount: number;
    };
}

const Post = (props: Props): React.ReactElement => {
    console.info("props.pageContext.site: ", props.pageContext.site);
    console.info("props.pageContext.post: ", props.pageContext.post);
    console.info(
        "props.pageContext.totalCount: ",
        props.pageContext.totalCount
    );

    return <p>HomePage 123</p>;
};

export default Post;

// import React from "react";
// import { graphql } from "gatsby";
// // @ts-ignore
// import { MDXRenderer } from 'gatsby-plugin-mdx';
// import Styled from "styled-components";
// import Layout from '../components/layout';
// import PostCard from '../components/post-card';
// import { PostCardType } from "../enums";
// import { Rexlnt } from "../../typings";

// interface Props {
//     pageContext: any;
//     data: {
//         post: Rexlnt.Post;
//     };
// }

// const Wrapper = Styled.div`
//     max-width: 1280px;
//     margin: 0 auto;
// `;

// const Main = Styled.div`
//     margin: 0 -24px;
// `;

// const MDXWrapper = Styled.div`
//     max-width: 800px;
//     margin: 0 auto;

//     h1, h2, h3, h4, h5, h6 {
//         margin: 8px 0;
//     }
//     p {
//         margin-bottom: 8px;
//         font-size: 16px;
//         font-family: 'Open Sans';
//         text-indent: 2rem;
//     }
// `;

// const PostPage = ({ pageContext, data }: Props): JSX.Element => {
//     return (
//         <Layout>
//             <Wrapper>
//                 <Main>
//                     <PostCard type={PostCardType.Large} postData={data} />
//                     <MDXWrapper>
//                         <MDXRenderer title="123">
//                             {pageContext.post.node.body}
//                         </MDXRenderer>
//                     </MDXWrapper>
//                 </Main>
//             </Wrapper>
//         </Layout>
//     );
// };

// export const query = graphql`
//     query Posts2 ($id: String!) {
//         post: mdx(id: {eq: $id}) {
//             id
//             frontmatter {
//                 title
//                 date(formatString:"MMM DD, YYYY")
//                 categories
//                 keywords
//                 description
//                 cover {
//                 childImageSharp {
//                     fluid(maxWidth: 1200) {
//                     base64
//                     tracedSVG
//                     aspectRatio
//                     src
//                     srcSet
//                     srcWebp
//                     srcSetWebp
//                     sizes
//                     originalImg
//                     originalName
//                     presentationWidth
//                     presentationHeight
//                     }
//                 }
//                 }
//             }
//             fields {
//                 slug
//             }
//             body
//         }
//     }
// `;

// export default PostPage;
