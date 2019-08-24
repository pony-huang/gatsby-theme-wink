import React from 'react';
import Styled from 'styled-components';
import { Link } from "gatsby";
import Image from 'gatsby-image';
import { Rexlnt } from '../../../typings';
import { PostCardType } from '../../enums';

interface Props {
    type: PostCardType;
    site?: Rexlnt.Site;
    postData: {
        post: Rexlnt.Post;
    };
}

const Wrapper = Styled.div`
    flex: 0 0 33.3333%;
    margin-bottom: 48px;
    padding: 0 24px;
    box-sizing: border-box;
`;

const WrapperLarge = Styled(Wrapper)`
    flex: 0 0 100%;
`;

const Cover = Styled(Image)`
    height: 600px;
`;

const CoverSmall = Styled(Cover)`
    height: 240px;
`;

const Main = Styled.div`
    position: relative;
    padding: 24px 0 0;
`;

const MainLarge = Styled(Main)`
    width: 70%;
    margin: -100px 0 0 48px;
    padding: 32px;
    background: #FFFFFF;
`;

const BlockLink = Styled(Link)`
    display: block;
`;

const Title = Styled.h2`
    display: inline;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.4;
    color: #000;
`;

const TitleLarge = Styled(Title)`
    font-size: 32px;
`;

const SubTitle = Styled(Title)`
    font-weight: 100;

    &:before {
        content: ' ';
    }
`;

const SubTitleLarge = Styled(SubTitle)`
    font-size: 32px;
`;

const PostTime = Styled.time`
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
`;

const PostCardLarge = (props: Props) => {
    const { postData } = props;

    return (
        <WrapperLarge>
            <Cover fluid={postData.post.frontmatter.cover.childImageSharp.fluid} />
            <MainLarge>
                <div>
                    <PostTime>{postData.post.frontmatter.date}</PostTime>
                </div>
                <BlockLink to={postData.post.fields.slug}>
                    <TitleLarge>{postData.post.frontmatter.title}</TitleLarge>
                    <SubTitleLarge>{postData.post.frontmatter.description}</SubTitleLarge>
                </BlockLink>
            </MainLarge>
        </WrapperLarge>
    );
}

const PostCardSmall = (props: Props) => {
    const { postData } = props;
    return (
        <Wrapper>
            <CoverSmall fluid={postData.post.frontmatter.cover.childImageSharp.fluid} />
            <Main>
                <div>
                    <PostTime>{postData.post.frontmatter.date}</PostTime>
                </div>
                <BlockLink to={postData.post.fields.slug}>
                    <Title>{postData.post.frontmatter.title}</Title>
                    <SubTitle>{postData.post.frontmatter.description}</SubTitle>
                </BlockLink>
            </Main>
        </Wrapper>
    );
}

const PostCard = (props: Props) => {
    const { type = PostCardType.Small } = props;

    if (type === PostCardType.Large) {
        return <PostCardLarge {...props} />
    }

    return <PostCardSmall {...props} />
}

export default PostCard;
