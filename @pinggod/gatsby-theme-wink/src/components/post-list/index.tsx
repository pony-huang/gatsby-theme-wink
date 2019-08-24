import React from 'react';
import Styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby";
// import { GraphPosts } from '../../graphql';
import PostCard from '../post-card';
import { Rexlnt } from '../../../typings';
import { PostCardType } from '../../enums';

const Container = Styled.section`
    max-width: 1280px;
    margin: 0 auto;
`;

const PostCardList = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    margin: 0 -24px;
`;

const PostList = (): React.ReactElement => {
    const { site, allMdx }: {
        site: Rexlnt.Site;
        allMdx: Rexlnt.AllPost;
    } = useStaticQuery(graphql`
        query Posts1 {
            site {
                siteMetadata {
                    title
                    description
                }
            }
            allMdx(
                sort: {fields: frontmatter___date, order: DESC},
                filter: {frontmatter: {published: {eq: true}}}
            ) {
                totalCount
                posts: edges {
                    post: node {
                        id
                        frontmatter {
                            title
                            date(formatString:"MMM DD, YYYY")
                            categories
                            keywords
                            description
                            cover {
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
                        }
                        fields {
                            slug
                        }
                        body
                    }
                }
            }
        }
    `);

    return (
        <Container>
            <PostCardList>
                {
                    allMdx.posts.map((data, index: number) =>
                        <PostCard
                            key={index}
                            type={index === 0 ? PostCardType.Large : PostCardType.Small}
                            site={site}
                            postData={data} />
                    )
                }
            </PostCardList>
        </Container>
    );
}

export default PostList;
