import React from 'react';
import Styled from 'styled-components';
import { Link } from "gatsby";
import Image from 'gatsby-image';
import { Wink } from '../../../typings';

const Wrapper = Styled.div`
    flex: 0 0 50%;
    margin-bottom: 48px;
    padding: 0 24px;
    box-sizing: border-box;
`;

const Cover = Styled(Image)`
    height: 240px;
`;

const Main = Styled.div`
    position: relative;
    padding: 24px 0 0;
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

const SubTitle = Styled(Title)`
    font-weight: 100;

    &:before {
        content: ' ';
    }
`;

const PostTime = Styled.time`
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
`;

interface Props {
    post: Wink.Edge;
}

export const PostCard = (props: Props): JSX.Element => {
    const { node } = props.post;

    return (
        <Wrapper>
            <Cover fluid={node.frontmatter.cover.childImageSharp.fluid} />
            <Main>
                <div>
                    <PostTime>{node.frontmatter.date}</PostTime>
                </div>
                <BlockLink to={node.fields.slug}>
                    <Title>{node.frontmatter.title}</Title>
                    <SubTitle>{node.frontmatter.description}</SubTitle>
                </BlockLink>
            </Main>
        </Wrapper>
    );
};
