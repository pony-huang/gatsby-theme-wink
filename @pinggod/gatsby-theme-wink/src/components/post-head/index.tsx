import React from 'react';
import * as S from "./index.style";
import { OuterLink } from '../link';

interface Props {
    frontmatter: Wink.Frontmatter;
}

export const PostHead = (props: Props): React.ReactElement => {
    const { frontmatter } = props;

    return (
        <S.Wrapper>
            <S.Main>
                <S.PostTime>{frontmatter.date}</S.PostTime>
                <section>
                    <S.Title>{frontmatter.title}</S.Title>
                    <S.SubTitle>{frontmatter.description}</S.SubTitle>
                </section>
            </S.Main>
            <S.CoverWrapper>
                <S.CoverImage fluid={frontmatter.cover.childImageSharp.fluid} />
                <S.CoverMeta>
                    <span>photo by &nbsp;</span>
                    <OuterLink href={frontmatter.coverOriginalUrl}>{frontmatter.coverAuthor}</OuterLink>
                    <span>&nbsp;on unsplash.com</span>
                </S.CoverMeta>
            </S.CoverWrapper>
        </S.Wrapper>
    );
};
