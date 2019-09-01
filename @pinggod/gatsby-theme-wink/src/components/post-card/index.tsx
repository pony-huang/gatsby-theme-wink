import React from 'react';
import { Wink } from '../../../typings';
import * as S from "./index.style";

interface Props {
    post: Wink.Edge;
}

export const PostCard = (props: Props): React.ReactElement => {
    const { node } = props.post;

    return (
        <S.Wrapper to={node.fields.slug}>
            <S.Cover fluid={node.frontmatter.cover.childImageSharp.fluid} />
            <S.Main>
                <S.PostTime>{node.frontmatter.date}</S.PostTime>
                <section>
                    <S.Title>{node.frontmatter.title}</S.Title>
                    <S.SubTitle>{node.frontmatter.description}</S.SubTitle>
                </section>
            </S.Main>
        </S.Wrapper>
    );
};
