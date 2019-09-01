import React from 'react';
import { Wink } from '../../../typings';
import { PostCard } from '../post-card';
import * as S from "./index.style";

interface Props {
    data: Wink.Data;
}

export const PostList = (props: Props): React.ReactElement => {
    const { data } = props;

    return (
        <S.Wrapper>
            <S.List>
                {
                    data.allMdx.edges.map((post, index: number): React.ReactElement => {
                        return <PostCard key={index} post={post} />
                    })
                }
            </S.List>
        </S.Wrapper>
    );
};
